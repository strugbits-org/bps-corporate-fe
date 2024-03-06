import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";

const initialState = {
  contactusData: [],

  contactusLoading: false,
  error: null,
};

const wixClient = createClient({
  modules: { collections, items },
  auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
});


export const fetchMarketTopsections = createAsyncThunk(
  "data/fetchMarketTopsections",
  async () => {
    try {
        let options = {
            dataCollectionId: "ContactUsContent",
          };
    
          const { items: fetchContactUs } = await wixClient.items
            .queryDataItems(options)
            .eq("title", "Tried + True")
            .find();

      return fetchContactUs;
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
    }})

export default contactUsSlice.reducer;