import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";

const initialState = {
  IntroData: [],
  OurDreamData: [],
  OurFamilyData: [],
  SliderData: [],

  IntroLoading: false,
  OurDreamLoading: false,
  OurFamilyLoading: false,
  SliderLoading: false,
  error: null,
};

const wixClient = createClient({
  modules: { collections, items },
  auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
});

export const fetchIntroSection = createAsyncThunk(
  "data/fetchIntroSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "AboutUsTopSection",
      };

      const { items: fetchIntroSection } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "aboutustop")
        .find();

      return fetchIntroSection;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchOurDreamSection = createAsyncThunk(
  "data/fetchOurDreamSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "AboutusDreamTeamSection",
      };

      const { items: fetchedOurDream } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "The Dream Team")
        .find();

      return fetchedOurDream;
    } catch (error) {
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
        .eq("title", "Meet the rest of the family")
        .find();

      return fetchedOurFamily;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const fetchSliderSection = createAsyncThunk(
    "data/fetchSliderSection",
    async () => {
      try {
        let options = {
            dataCollectionId: "AboutUsSlider",
          };
          const { items: fetchedSliderBanner } = await wixClient.items
            .queryDataItems(options)
            .eq("title", "AboutUsSlider")
            .find();
  
        return fetchedSliderBanner;
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
      });
  },
});

export default aboutUsSlice.reducer;
