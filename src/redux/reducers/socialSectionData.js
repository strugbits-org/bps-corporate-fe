import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCollection } from "../fetchCollection";

const initialState = {
  data: null,
  loading: false,
  error: null,
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

const socialSectionSlice = createSlice({
  name: "socialSection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
