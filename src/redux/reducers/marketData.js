import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";
import { fetchCollection } from "../fetchCollection";

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
      const data = {
        "dataCollectionId": "MarketSection",
        "includeReferencedItems": ["howWeDoItSections"],
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": ["slug", slug],
        "limit": null
      }
      const response = await fetchCollection(data);
      handleCollectionLoaded();
      return response._items.map((x) => x.data)[0];
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
      const data = {
        "dataCollectionId": "MarketsPostPageSectionDetails",
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

export const getMarketCollection = createAsyncThunk(
  "data/getMarketCollection",
  async () => {
    try {
      const data = {
        "dataCollectionId": "MarketSection",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
      }, 1000);
      return response._items.map((x) => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
    } catch (error) {
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
