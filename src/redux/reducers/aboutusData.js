import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";
import { listPortfolios } from "../../utilis/queryCollections";
import { fetchCollection } from "../fetchCollection";

const initialState = {
  IntroData: [],
  OurDreamData: [],
  OurFamilyData: [],
  SliderData: [],
  AboutSlider: [],
  sectionDetails: [],
  aboutCards:[],
  
  aboutCardsLoading:false,
  sectionDetailsLoading: false,
  AboutSliderLoading: false,
  IntroLoading: false,
  OurDreamLoading: false,
  OurFamilyLoading: false,
  SliderLoading: false,
  error: null,
};


export const fetchCardsSection = createAsyncThunk(
  "data/fetchCardsSection",
  async () => {
    try {
      const data = {
        "dataCollectionId": "AboutUsCardsSection",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      handleCollectionLoaded();
      return response._items.map((x) => x.data);
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchIntroSection = createAsyncThunk(
  "data/fetchIntroSection",
  async () => {
    try {
      const data = {
        "dataCollectionId": "AboutUsIntroSection",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      handleCollectionLoaded();
      return response._items.map((x) => x.data)[0];
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchOurDreamSection = createAsyncThunk(
  "data/fetchOurDreamSection",
  async () => {
    try {
      const data = {
        "dataCollectionId": "AboutUsDreamTeamSection",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      handleCollectionLoaded();
      return response._items.map((x) => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchOurFamilySection = createAsyncThunk(
  "data/fetchOurFamilySection",
  async () => {
    try {
      const data = {
        "dataCollectionId": "AboutUsRestOfFamily",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      handleCollectionLoaded();
      return response._items.map((x) => x.data);
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const getAboutSlider = createAsyncThunk(
  "data/getServicesSlider",
  async () => {
    try {
      const options = {
        pageSize: 3,
        disableLoader: true,
      };

      const portfolio = await listPortfolios(options);
      handleCollectionLoaded();
      return portfolio._items.map(item => item.data);
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const getAboutSectionDetails = createAsyncThunk(
  "data/getAboutSectionDetails",
  async () => {
    try {
      const data = {
        "dataCollectionId": "AboutUsSectionDetails",
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

const aboutUsSlice = createSlice({
  name: "aboutus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// Intro Section ////
      .addCase(fetchIntroSection.pending, (state) => {
        state.IntroLoading = true;
        state.error = null;
      })
      .addCase(fetchIntroSection.fulfilled, (state, action) => {
        state.IntroLoading = false;
        state.IntroData = action.payload;
      })
      .addCase(fetchIntroSection.rejected, (state, action) => {
        state.IntroLoading = false;
        state.error = action.error.message;
      })
      /// cards section Details ////
      .addCase(fetchCardsSection.pending, (state) => {
        state.aboutCardsLoading = true;
        state.error = null;
      })
      .addCase(fetchCardsSection.fulfilled, (state, action) => {
        state.aboutCardsLoading = false;
        state.aboutCards = action.payload;
      })
      .addCase(fetchCardsSection.rejected, (state, action) => {
        state.aboutCardsLoading = false;
        state.error = action.error.message;
      })
      /// Section Details ////
      .addCase(getAboutSectionDetails.pending, (state) => {
        state.sectionDetailsLoading = true;
        state.error = null;
      })
      .addCase(getAboutSectionDetails.fulfilled, (state, action) => {
        state.sectionDetailsLoading = false;
        state.sectionDetails = action.payload;
      })
      .addCase(getAboutSectionDetails.rejected, (state, action) => {
        state.sectionDetailsLoading = false;
        state.error = action.error.message;
      })
      /// Our Dream Section ////
      .addCase(fetchOurDreamSection.pending, (state) => {
        state.OurDreamLoading = true;
        state.error = null;
      })
      .addCase(fetchOurDreamSection.fulfilled, (state, action) => {
        state.OurDreamLoading = false;
        state.OurDreamData = action.payload;
      })
      .addCase(fetchOurDreamSection.rejected, (state, action) => {
        state.OurDreamLoading = false;
        state.error = action.error.message;
      })
      /// Our Family Section ////
      .addCase(fetchOurFamilySection.pending, (state) => {
        state.OurFamilyLoading = true;
        state.error = null;
      })
      .addCase(fetchOurFamilySection.fulfilled, (state, action) => {
        state.OurFamilyLoading = false;
        state.OurFamilyData = action.payload;
      })
      .addCase(fetchOurFamilySection.rejected, (state, action) => {
        state.OurFamilyLoading = false;
        state.error = action.error.message;
      })
      /// Slider Section ////
      .addCase(getAboutSlider.pending, (state) => {
        state.AboutSliderLoading = true;
        state.error = null;
      })
      .addCase(getAboutSlider.fulfilled, (state, action) => {
        state.AboutSliderLoading = false;
        state.AboutSlider = action.payload;
      })
      .addCase(getAboutSlider.rejected, (state, action) => {
        state.AboutSliderLoading = false;
        state.error = action.error.message;
      });
  },
});

export default aboutUsSlice.reducer;
