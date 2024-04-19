import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCollection } from "../fetchCollection";
// import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";


const initialState = {
  data: {
    footerData: [],
    contactData: [],
  },
  socialLinks: [],
  socialLinksLoading: false,
  footerDataLoading: false,
  error: null,
};

export const fetchFooterData = createAsyncThunk(
  "data/fetchFooterData",
  async () => {
    try {
      const data = {
        "dataCollectionId": "Footer",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const contact_data = {
        "dataCollectionId": "ContactDetails",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const footer_response = await fetchCollection(data);
      const contact_response = await fetchCollection(contact_data);
      return {
        footerData: footer_response._items.map((x) => x.data)[0],
        contactData: contact_response._items.map((x) => x.data),
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
      const data = {
        "dataCollectionId": "SocialLinks",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      return response._items.map((x) => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
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
