import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";

const wixClient = createWixClient();

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchSearchContent = createAsyncThunk(
  "data/fetchSearchContent",
  async () => {
    try {
      const { items } = await wixClient.items.queryDataItems({ dataCollectionId: "SearchSectionDetails" }).find();
      return items.map(x => x.data)[0];
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
