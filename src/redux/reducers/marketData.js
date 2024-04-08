import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getFullImageURL from "../../common/common_functions/imageURL";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";

const wixClient = createWixClient();

const initialState = {
  marketTopData: null,
  marketModel: [],

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

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", slug)
        .find();
        const marketsArray = fetchedItems.map((service) => {
          service.data.image = getFullImageURL(service.data.image);
          return service.data;
        });
        handleCollectionLoaded();
      return marketsArray[0];
    } catch (error) {
      handleCollectionLoaded();
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

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .find();

      const marketsArray = fetchedItems.map((item) => {
        item.data.image = getFullImageURL(item.data.image,true);
        return item.data;
      });
      if (markLoaded) {
        handleCollectionLoaded();
      }
      return marketsArray.sort((a, b) => a.orderNumber - b.orderNumber);
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
