import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";
import { listPortfolios } from "../../utilis/queryCollections";

const wixClient = createWixClient();

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
      let options = {
        dataCollectionId: "AboutUsCardsSection",
      };

      const { items } = await wixClient.items
        .queryDataItems(options)
        .find();
      handleCollectionLoaded();

      return items.map(item => item.data);
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
      let options = {
        dataCollectionId: "AboutUsIntroSection",
      };

      const { items } = await wixClient.items
        .queryDataItems(options)
        .find();
      handleCollectionLoaded();

      return items.map(item=>item.data)[0];
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
      let options = {
        dataCollectionId: "AboutUsDreamTeamSection",
      };

      const { items: fetchedOurDream } = await wixClient.items
        .queryDataItems(options)
        .find();
      handleCollectionLoaded();
      //trigger animation on data load
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
        document.querySelector(".triggerSplitWordAnimation").click();
      }, 1000);

      return fetchedOurDream;
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
      let options = {
        dataCollectionId: "AboutUsRestOfFamily",
      };

      const { items: fetchedOurFamily } = await wixClient.items
        .queryDataItems(options)
        .find();
      handleCollectionLoaded();
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
        document.querySelector(".triggerSplitWordAnimation").click();
      }, 1000);
      return fetchedOurFamily;
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);
export const fetchSliderSection = createAsyncThunk(
  "data/fetchSliderSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "AboutBottomSlider",
      };
      const { items: fetchedSliderBanner } = await wixClient.items
        .queryDataItems(options)
        .find();
      handleCollectionLoaded();

      return fetchedSliderBanner;
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
      return portfolio.items.map(item => item.data);
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
      let options = {dataCollectionId: "AboutUsSectionDetails"};
      const { items } = await wixClient.items.queryDataItems(options).find();
      return items.map(item => item.data)[0];
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
      /// Slider Banner Section ////
      .addCase(fetchSliderSection.pending, (state) => {
        state.SliderLoading = true;
        state.error = null;
      })
      .addCase(fetchSliderSection.fulfilled, (state, action) => {
        state.SliderLoading = false;
        state.SliderData = action.payload;
      })
      .addCase(fetchSliderSection.rejected, (state, action) => {
        state.SliderLoading = false;
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
