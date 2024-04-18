import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCollection } from "../fetchCollection";

const initialState = {
  contactusData: null,

  contactusLoading: false,
  error: null,
};


export const fetchContactUs = createAsyncThunk(
  "data/fetchContactUs",
  async () => {
    try {
      const data = {
        "dataCollectionId": "ContactUsContent",
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

const contactUsSlice = createSlice({
  name: "contactus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// Intro Section ////
      .addCase(fetchContactUs.pending, (state) => {
        state.contactusLoading = true;
        state.error = null;
      })
      .addCase(fetchContactUs.fulfilled, (state, action) => {
        state.contactusLoading = false;
        state.contactusData = action.payload;
      })
      .addCase(fetchContactUs.rejected, (state, action) => {
        state.contactusLoading = false;
        state.error = action.error.message;
      });
  }
})

export default contactUsSlice.reducer;