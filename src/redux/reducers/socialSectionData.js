import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCollection, getInstaFeed } from "../fetchCollection";

const initialState = {
  data: null,
  loading: false,
  error: null,

  insta_feed:[],
  insta_feed_loading:[],
  insta_feed_error:[],
};

export const getSocialSectionDetails = createAsyncThunk(
  "data/getSocialSectionDetails",
  async () => {
    try {
      const data = {
        "dataCollectionId": "SocialSectionDetails",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      const script = document.createElement("script");
      script.async = true;
      script.type = "text/javascript";
      script.dataset.pinBuild = "doBuild";
      script.src = "//assets.pinterest.com/js/pinit.js";
      document.body.appendChild(script);
      if (window.doBuild) window.doBuild();
      return response._items.map((x) => x.data)[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const fetchInstaFeed = createAsyncThunk(
  "data/fetchInstaFeed",
  async () => {
    try {
      const response = await getInstaFeed();
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const socialSectionSlice = createSlice({
  name: "socialSection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstaFeed.pending, (state) => {
        state.insta_feed_loading = true;
        state.insta_feed_error = null;
      })
      .addCase(fetchInstaFeed.fulfilled, (state, action) => {
        state.insta_feed_loading = false;
        state.insta_feed = action.payload;
      })
      .addCase(fetchInstaFeed.rejected, (state, action) => {
        state.insta_feed_loading = false;
        state.insta_feed_error = action.error.message;
      })

      .addCase(getSocialSectionDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSocialSectionDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSocialSectionDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default socialSectionSlice.reducer;
