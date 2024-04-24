import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCollection } from "../fetchCollection";

const initialState = {
  seo_data: null,
  seo_data_loading: false,
  seo_data_error: null,
};

export const fetchPageSeoData = createAsyncThunk(
  "data/fetchPageSeoData",
  async (path) => {
    try {
      const data = {
        "dataCollectionId": "PageSeoConfiguration",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": ["slug", path],
        "limit": null
      }
      const response = await fetchCollection(data);
      return response._items.map((x) => x.data)[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const appConfigSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageSeoData.pending, (state) => {
        state.seo_data_loading = true;
        state.seo_data_error = null;
      })
      .addCase(fetchPageSeoData.fulfilled, (state, action) => {
        state.seo_data_loading = false;
        state.seo_data = action.payload;
      })
      .addCase(fetchPageSeoData.rejected, (state, action) => {
        state.seo_data_loading = false;
        state.seo_data_error = action.error.message;
      })
  },
});

export default appConfigSlice.reducer;
