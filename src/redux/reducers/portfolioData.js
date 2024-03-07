import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const initialState = {
  portfolioData: {
    data : [],
    marketCategories : [],
    studioTags : [],
  },
  singlePortfolioData: null,

  portfolioDataLoading: false,
  singlePortfolioLoading: false,
  error: null,
};

const wixClient = createClient({
  modules: { collections, items },
  auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
});

export const fetchPortfolio = createAsyncThunk(
  "data/fetchPortfolio",
  async () => {
    try {
      let options = {
        dataCollectionId: "portfolioItems",
        includeReferencedItems: ["marketCategory", "studioTags"],
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

export const fetchSinglePortfolio = createAsyncThunk(
  "data/fetchSinglePortfolio",
  async (slug) => {
    try {
      let options = {
        dataCollectionId: "portfolioItems",
        includeReferencedItems: ["marketCategory", "studioTags"],
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", slug)
        .find();

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

const contactUsSlice = createSlice({
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

export default contactUsSlice.reducer;
