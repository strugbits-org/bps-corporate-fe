import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const initialState = {
  marketTopData: [],

  marketTopLoading: false,
  error: null,
};

const wixClient = createClient({
  modules: { collections, items },
  auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
});

export const fetchMarketTopsections = createAsyncThunk(
  "data/fetchMarketTopsections",
  async (slug) => {
    try {

      let options = {
        dataCollectionId: "MarketSection",
        includeReferencedItems: ["howWeDoItSections"],
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", slug)
        .find();

      const marketsArray = fetchedItems.map((service) => {
        service.data.image = getFullImageURL(service.data.image);
        return service.data;
      });

      return marketsArray[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const contactUsSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// Intro Section ////
      .addCase(fetchMarketTopsections.pending, (state) => {
        state.marketTopLoading = true;
        state.error = null;
      })
      .addCase(fetchMarketTopsections.fulfilled, (state, action) => {
        state.marketTopLoading = false;
        state.contactusData = action.payload;
      })
      .addCase(fetchMarketTopsections.rejected, (state, action) => {
        state.marketTopLoading = false;
        state.error = action.error.message;
      });
  },
});

export default contactUsSlice.reducer;
