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
    socialLinks:[],
    socialLinksLoading: false,
    footerDataLoading: false,
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

export const getSocialLinks = createAsyncThunk(
  "data/getSocialLinks",
  async () => {
    try {
        let options = {dataCollectionId: "SocialLinks"};
        const { items } = await wixClient.items.queryDataItems(options).find();
        return items.map((item)=>item.data).sort((a, b) => a.orderNumber - b.orderNumber);
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
      /// socialLinks ////
      .addCase(getSocialLinks.pending, (state) => {
        state.socialLinksLoading = true;
        state.error = null;
      })
      .addCase(getSocialLinks.fulfilled, (state, action) => {
        state.socialLinksLoading = false;
        state.socialLinks = action.payload;
      })
      .addCase(getSocialLinks.rejected, (state, action) => {
        state.socialLinksLoading = false;
        state.error = action.error.message;
      })
      /// Footer ////
      .addCase(fetchFooterData.pending, (state) => {
        state.footerDataLoading = true;
        state.error = null;
      })
      .addCase(fetchFooterData.fulfilled, (state, action) => {
        state.footerDataLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.footerDataLoading = false;
        state.error = action.error.message;
      });
  },
});

export default footerSlice.reducer;
