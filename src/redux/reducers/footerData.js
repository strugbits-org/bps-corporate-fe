import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
// import getFullImageURL from "../../common/common_functions/imageURL";
// import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";

const wixClient = createWixClient();

const initialState = {
    data:{
        footerData:[],
        contactData:[],
    },
    footerDataLaoding: false,
    error: null,
};

export const fetchFooterData = createAsyncThunk(
  "data/fetchFooterData",
  async () => {
    try {
        let options = {
            dataCollectionId: "Footer",
        };
    
        let contactus = {
            dataCollectionId: "ContactDetails",
        }

        const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .find();
    
        const { items: fetchedContact } = await wixClient.items
        .queryDataItems(contactus)
        .eq("title", "contact")
        .find();

        return {
          footerData:fetchedItems,
          contactData:fetchedContact,
        };
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// Footer ////
      .addCase(fetchFooterData.pending, (state) => {
        state.footerDataLaoding = true;
        state.error = null;
      })
      .addCase(fetchFooterData.fulfilled, (state, action) => {
        state.footerDataLaoding = false;
        state.data = action.payload;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.footerDataLaoding = false;
        state.error = action.error.message;
      });
  },
});

export default footerSlice.reducer;
