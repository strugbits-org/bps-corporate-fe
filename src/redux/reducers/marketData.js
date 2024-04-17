import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";

const wixClient = createWixClient();

const initialState = {
  marketTopData: null,
  marketModel: [],
  marketSectionDetails: [],

  marketSectionLoading: false,
  marketModelLoading: false,
  marketTopLoading: false,
  error: null,
};



export const fetchMarketTopsections = createAsyncThunk(
  "data/fetchMarketTopsections",
  async (slug) => {
    try {
      let options = {
        dataCollectionId: "MarketSection",
        includeReferencedItems: ["howWeDoItSections"],
      };

      const { items } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", slug)
        .find();
      handleCollectionLoaded();
      return items.map(x => x.data)[0];
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const getMarketsPostSectionDetails = createAsyncThunk(
  "data/getMarketsPostSectionDetails",
  async () => {
    try {
      let options = { dataCollectionId: "MarketsPostPageSectionDetails" };
      const { items } = await wixClient.items.queryDataItems(options).find();
      return items.map(item => item.data)[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getMarketCollection = createAsyncThunk(
  "data/getMarketCollection",
  async (markLoaded = false) => {
    try {
      let options = {
        dataCollectionId: "MarketSection",
      };

      const { items } = await wixClient.items
        .queryDataItems(options)
        .find();
      if (markLoaded) {
        handleCollectionLoaded();
      }
      return items.map(x => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getMarketsPostSectionDetails.pending, (state) => {
        state.marketSectionLoading = true;
        state.error = null;
      })
      .addCase(getMarketsPostSectionDetails.fulfilled, (state, action) => {
        state.marketSectionLoading = false;
        state.marketSectionDetails = action.payload;
      })
      .addCase(getMarketsPostSectionDetails.rejected, (state, action) => {
        state.marketSectionLoading = false;
        state.error = action.error.message;
      })

      .addCase(fetchMarketTopsections.pending, (state) => {
        state.marketTopLoading = true;
        state.error = null;
      })
      .addCase(fetchMarketTopsections.fulfilled, (state, action) => {
        state.marketTopLoading = false;
        state.marketTopData = action.payload;
      })
      .addCase(fetchMarketTopsections.rejected, (state, action) => {
        state.marketTopLoading = false;
        state.error = action.error.message;
      })
      /// Market Model ////
      .addCase(getMarketCollection.pending, (state) => {
        state.marketModelLoading = true;
        state.error = null;
      })
      .addCase(getMarketCollection.fulfilled, (state, action) => {
        state.marketModelLoading = false;
        state.marketModel = action.payload;
      })
      .addCase(getMarketCollection.rejected, (state, action) => {
        state.marketModelLoading = false;
        state.error = action.error.message;
      });
  },
});

export default marketSlice.reducer;
