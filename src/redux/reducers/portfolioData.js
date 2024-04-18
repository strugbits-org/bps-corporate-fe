import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";
import { listPortfolios } from "../../utilis/queryCollections";
import { fetchCollection } from "../fetchCollection";

const initialState = {
  portfolioData: [],
  singlePortfolioData: null,
  totalPortfolios: null,
  portfolioSectionDetails: [],
  portfolioSectionDetailsLoading: false,

  portfolioDataLoading: false,
  singlePortfolioLoading: false,
  error: null,
};

export const getAboutSlider = createAsyncThunk(
  "data/getServicesSlider",
  async () => {
    try {
      const options = {
        pageSize: 3,
        disableLoader: true,
      };

      const portfolio = await listPortfolios(options);
      handleCollectionLoaded();
      return portfolio.items.map(item => item.data);
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchPortfolio = createAsyncThunk(
  "data/fetchPortfolio",
  async ({ pageSize = 4, excludeItem = null }) => {
    try {
      const options = {
        pageSize: pageSize,
        disableLoader: true,
        excludeItem
      };
      const portfolio = await listPortfolios(options);
      handleCollectionLoaded();
      return portfolio.items.map(item => item.data);
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
      const data = {
        "dataCollectionId": "PortfolioSectionDetails",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      return response._items.map((x) => x.data)[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchSinglePortfolio = createAsyncThunk(
  "data/fetchSinglePortfolio",
  async (slug) => {
    try {
      const data = {
        "dataCollectionId": "PortfolioCollection",
        "includeReferencedItems": ["portfolioRef", "locationFilteredVariant", "storeProducts", "studios", "markets"],
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": ["slug", slug],
        "limit": null
      }
      const response = await fetchCollection(data);
      handleCollectionLoaded();
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
      }, 1000);
      return response._items.map((x) => x.data)[0];
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
