import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";

const wixClient = createWixClient();

const initialState = {
  portfolioData: [],
  singlePortfolioData: null,
  totalPortfolios: null,
  portfolioSectionDetails:[],
  portfolioSectionDetailsLoading: false,

  portfolioDataLoading: false,
  singlePortfolioLoading: false,
  error: null,
};

export const fetchPortfolio = createAsyncThunk(
  "data/fetchPortfolio",
  async ({pageSize = 4, triggerAnimations = true, excludeItem = null}) => {
    try {
      let options = {
        dataCollectionId: "PortfolioCollection",
        includeReferencedItems: ["portfolioRef", "locationFilteredVariant", "storeProducts", "studios", "markets","gallery","media"],
        returnTotalCount: true,
      };
  
      const response = await wixClient.items.queryDataItems(options).ne("slug", excludeItem).ne("isHidden", true).descending("publishDate").limit(pageSize).find();
      if (triggerAnimations) {
        handleCollectionLoaded();
        setTimeout(() => {
          document.querySelector(".updateWatchedTrigger").click();
        }, 1000);
      }

      const data = response.items.map((item)=> item.data);
      return data;
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const getPortfolioSectionDetails = createAsyncThunk(
  "data/getPortfolioSectionDetails",
  async () => {
    try {
      let options = {dataCollectionId: "PortfolioSectionDetails"};
      const { items } = await wixClient.items.queryDataItems(options).find();
      return items.map(item => item.data)[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchSinglePortfolio = createAsyncThunk(
  "data/fetchSinglePortfolio",
  async (slug) => {
    try {
      let options = {
        dataCollectionId: "PortfolioCollection",
        includeReferencedItems: ["portfolioRef", "locationFilteredVariant", "storeProducts", "studios", "markets"],
      };
      const { items: fetchedItems } = await wixClient.items
      .queryDataItems(options)
      .eq("slug", slug).find();

      handleCollectionLoaded();
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
      }, 1000);

      const data = fetchedItems.map((item)=> item.data);
      return data[0];
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// Portfolio ////
      .addCase(getPortfolioSectionDetails.pending, (state) => {
        state.portfolioSectionDetailsLoading = true;
        state.error = null;
      })
      .addCase(getPortfolioSectionDetails.fulfilled, (state, action) => {
        state.portfolioSectionDetailsLoading = false;
        state.portfolioSectionDetails = action.payload;
      })
      .addCase(getPortfolioSectionDetails.rejected, (state, action) => {
        state.portfolioSectionDetailsLoading = false;
        state.error = action.error.message;
      })
      /// Portfolio ////
      .addCase(fetchPortfolio.pending, (state) => {
        state.portfolioDataLoading = true;
        state.error = null;
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.portfolioDataLoading = false;
        state.portfolioData = action.payload;
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.portfolioDataLoading = false;
        state.error = action.error.message;
      })
      /// Single Portfolio ////
      .addCase(fetchSinglePortfolio.pending, (state) => {
        state.singlePortfolioLoading = true;
        state.error = null;
      })
      .addCase(fetchSinglePortfolio.fulfilled, (state, action) => {
        state.singlePortfolioLoading = false;
        state.singlePortfolioData = action.payload;
      })
      .addCase(fetchSinglePortfolio.rejected, (state, action) => {
        state.singlePortfolioLoading = false;
        state.error = action.error.message;
      });
  },
});

export default portfolioSlice.reducer;
