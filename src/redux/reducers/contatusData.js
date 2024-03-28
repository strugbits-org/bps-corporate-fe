import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";

const wixClient = createWixClient();

const initialState = {
  contactusData: [],

  contactusLoading: false,
  error: null,
};


export const fetchContactUs = createAsyncThunk(
  "data/fetchContactUs",
  async () => {
    try {
        let options = {
            dataCollectionId: "ContactUsContent",
            includeReferencedItems: ["blog"],
          };
    
          const { items: fetchContactUs } = await wixClient.items
          
            .queryDataItems(options)
            .eq("title", "Tried + True")
            .find();
            handleCollectionLoaded();

      return fetchContactUs;
    } catch (error) {
      handleCollectionLoaded();
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