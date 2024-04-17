import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";
import { listPortfolios } from "../../utilis/queryCollections";
const wixClient = createWixClient();

const initialState = {
  servicesData: null,
  servicesModelData: [],
  servicesSlider: [],
  servicesSectionDetails: null,

  servicesSectionDetailsLoading: false,
  servicesSliderLoading: false,
  servicesModelLoading: false,
  servicesLoading: false,
  error: null,
};

export const fetchServicesData = createAsyncThunk(
  "data/fetchServicesData",
  async (slug) => {
    try {
      let options = {
        dataCollectionId: "StudiosSection",
        includeReferencedItems: ["subServices"],
      };

      const { items } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", slug)
        .find();

      return items.map(x => x.data)[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// const options = {
//   pageSize: 3,
//   disableLoader: true,
//   studios: [service id],
// };

// const portfolio = await listPortfolios(options);

export const getServicesSectionDetails = createAsyncThunk(
  "data/getServicesSectionDetails",
  async () => {
    try {
      const { items } = await wixClient.items.queryDataItems({ dataCollectionId: "ServicePostSectionDetails" }).find();
      return items.map(x => x.data)[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getServicesSlider = createAsyncThunk(
  "data/getServicesSlider",
  async (id) => {
    try {
      const options = {
        pageSize: 3,
        disableLoader: true,
        studios: [id],
      };

      const portfolio = await listPortfolios(options);
      handleCollectionLoaded();
      return portfolio.items.map(item => item.data)
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);


const servicesSlice = createSlice({
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
      //slider reducers//
      .addCase(getServicesSlider.pending, (state) => {
        state.servicesSliderLoading = true;
        state.error = null;
      })
      .addCase(getServicesSlider.fulfilled, (state, action) => {
        state.servicesSliderLoading = false;
        state.servicesSlider = action.payload;
      })
      .addCase(getServicesSlider.rejected, (state, action) => {
        state.servicesSliderLoading = false;
        state.error = action.error.message;
      })
      //slider reducers//
      .addCase(getServicesSectionDetails.pending, (state) => {
        state.servicesSectionDetailsLoading = true;
        state.error = null;
      })
      .addCase(getServicesSectionDetails.fulfilled, (state, action) => {
        state.servicesSectionDetailsLoading = false;
        state.servicesSectionDetails = action.payload;
      })
      .addCase(getServicesSectionDetails.rejected, (state, action) => {
        state.servicesSectionDetailsLoading = false;
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
