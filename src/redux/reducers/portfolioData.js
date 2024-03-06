import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const initialState = {
  portfolioData: [],

  portfolioLoading: false,
  error: null,
};

const wixClient = createClient({
  modules: { collections, items },
  auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
});

export const fetchPortfolioSections = createAsyncThunk(
  "data/fetchPortfolioSections",
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
      /// Intro Section ////
      .addCase(fetchPortfolioSections.pending, (state) => {
        state.portfolioLoading = true;
        state.error = null;
      })
      .addCase(fetchPortfolioSections.fulfilled, (state, action) => {
        state.portfolioLoading = false;
        state.portfolioData = action.payload;
      })
      .addCase(fetchPortfolioSections.rejected, (state, action) => {
        state.portfolioLoading = false;
        state.error = action.error.message;
      });
  },
});

export default contactUsSlice.reducer;
