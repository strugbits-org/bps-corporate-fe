import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getFullImageURL from "../../common/common_functions/imageURL";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/loadAnimations";

const wixClient = createWixClient();

const initialState = {
  portfolioData: [],
  singlePortfolioData: null,

  portfolioDataLoading: false,
  singlePortfolioLoading: false,
  error: null,
};

export const fetchPortfolio = createAsyncThunk(
  "data/fetchPortfolio",
  async (triggerAnimations = true) => {
    try {
      let options = {
        dataCollectionId: "PortfolioCollection",
        includeReferencedItems: ["portfolioRef", "locationFilteredVariant", "storeProducts", "studios", "markets"],
      };
  
      const { items: fetchedItems } = await wixClient.items.queryDataItems(options).find();
      if (triggerAnimations) {
        handleCollectionLoaded();
        setTimeout(() => {
          document.querySelector(".updateWatchedTrigger").click();
        }, 1000);
      }
      const data = fetchedItems.map((item)=> item.data);
      return data;
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
      throw new Error(error.message);
    }
  }
);


export const __fetchPortfolio = createAsyncThunk(
  "data/fetchPortfolio",
  async (triggerAnimations = true) => {

    try {
      let options = {
        dataCollectionId: "portfolioItems",
        includeReferencedItems: ["marketCategory", "studioTags","customData","storeProducts"],
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .find();

      var marketCategoriesArray = [];
      var studioTagsArray = [];
      const portfolioArray = fetchedItems.map((item) => {
        item.data.marketCategory = item.data.marketCategory.cardname;
        marketCategoriesArray.push(item.data.marketCategory);

        item.data.studioTags = item.data.studioTags.map((tag) => {
          studioTagsArray.push(tag.cardName);
          return tag.cardName
        });
        item.data.image = getFullImageURL(item.data.image);
        return item.data;
      });
      const uniqueMarketCategories = [...new Map(marketCategoriesArray.map(item => [item, item])).values()];
      const uniqueStudioTags = [...new Map(studioTagsArray.map(item => [item, item])).values()];
      if (triggerAnimations) {
        handleCollectionLoaded();
      }
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
      }, 1000);
      return {
        data: portfolioArray,
        marketCategories: uniqueMarketCategories,
        studioTags: uniqueStudioTags,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const __fetchSinglePortfolio = createAsyncThunk(
  "data/fetchSinglePortfolio",
  async (slug) => {
    try {
      let options = {
        dataCollectionId: "portfolioItems",
        includeReferencedItems: ["marketCategory", "studioTags","customData","storeProducts"],
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", slug)
        .find();
        handleCollectionLoaded();
      const portfolioArray = fetchedItems.map((item) => {
        item.data.marketCategory = item.data.marketCategory.cardname;
        item.data.studioTags = item.data.studioTags.map((tag) => tag.cardName);
        item.data.image = getFullImageURL(item.data.image);
        item.data.gallery = item.data.gallery.map((image) => getFullImageURL(image.src));
        return item.data;
      });
      return portfolioArray[0];
    } catch (error) {
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
