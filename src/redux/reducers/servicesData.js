import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const initialState = {
  servicesData: null,
  servicesModelData: [],

  servicesModelLoading: false,
  servicesLoading: false,
  error: null,
};

const wixClient = createClient({
  modules: { collections, items },
  auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
});

export const fetchServicesData = createAsyncThunk(
  "data/fetchServicesData",
  async (slug) => {
    try {
      let options = {
        dataCollectionId: "StudiosSection",
        includeReferencedItems: ["subServices"],
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", slug)
        .find();

      const servicesArray = fetchedItems.map((service) => {
        service.data.modalImage = getFullImageURL(service.data.modalImage);
        service.data.image = getFullImageURL(service.data.image);
        return service.data;
      });

      return servicesArray[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getServicesModel = createAsyncThunk(
  "data/getServicesModel",
  async () => {
    try {
      let options = {
        dataCollectionId: "StudiosSection",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Studios")
        .find();
        const servicesArray = fetchedItems.map((service)=> {
          service.data.image = getFullImageURL(service.data.modalImage);
          return service.data;
        });

      return servicesArray;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const contactUsSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicesData.pending, (state) => {
        state.servicesLoading = true;
        state.error = null;
      })
      .addCase(fetchServicesData.fulfilled, (state, action) => {
        state.servicesLoading = false;
        state.servicesData = action.payload;
      })
      .addCase(fetchServicesData.rejected, (state, action) => {
        state.servicesLoading = false;
        state.error = action.error.message;
      })
      //model reducers//
      .addCase(getServicesModel.pending, (state) => {
        state.servicesLoading = true;
        state.error = null;
      })
      .addCase(getServicesModel.fulfilled, (state, action) => {
        state.servicesLoading = false;
        state.servicesModelData = action.payload;
      })
      .addCase(getServicesModel.rejected, (state, action) => {
        state.servicesLoading = false;
        state.error = action.error.message;
      });
  },
});

export default contactUsSlice.reducer;
