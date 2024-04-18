import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCollection } from "../fetchCollection";

const initialState = {
  config: null,
  loading: false,
  error: null,
};

export const loadAppConfig = createAsyncThunk(
  "data/loadAppConfig",
  async () => {
    try {
      const data = {
        "dataCollectionId": "AppConfig",
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

const appConfigSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAppConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadAppConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.config = action.payload;
      })
      .addCase(loadAppConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default appConfigSlice.reducer;
