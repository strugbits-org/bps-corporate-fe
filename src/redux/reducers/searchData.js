import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCollection } from "../fetchCollection";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchSearchContent = createAsyncThunk(
  "data/fetchSearchContent",
  async () => {
    try {
      const data = {
        "dataCollectionId": "SearchSectionDetails",
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
  name: "searchContent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchContent.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSearchContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default appConfigSlice.reducer;
