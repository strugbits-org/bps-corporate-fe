import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";

const wixClient = createWixClient();

const initialState = {
  homeTopData: [],
  getTouchData: [],
  studioData: [],
  ourProjectData: [],
  peopleReviewData: [],
  marketData: [],
  rentalStoreData: [],
  dreamBigData: [],

  getTouchLoading: false,
  homeTopLoading: false,
  studioLoading: false,
  ourProjectLoading: false,
  peopleReviewLoading: false,
  marketLoading: false,
  rentalLoading: false,
  dreamBigLoading: false,
  error: null,
};


export const fetchHomeTopData = createAsyncThunk(
  "data/fetchDataItems",
  async () => {
    try {
      let options = {
        dataCollectionId: "HomeTopSectionData",
      };

      const { items: fetchHomeTopData } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "TopSection")
        .find();

      return fetchHomeTopData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchGetTouchSection = createAsyncThunk(
  "data/fetchGetTouchSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "GetTouchSection",
      };

      const { items: fetchGetTouchSection } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "gettouch")
        .find();

      return fetchGetTouchSection;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchStudioSection = createAsyncThunk(
  "data/fetchStudioSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "StudiosSection",
      };

      const { items: fetchedStudioItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Studios")
        .find();

      return fetchedStudioItems;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchOurPorjectSection = createAsyncThunk(
  "data/fetchOurPorjectSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "SomeOfOurProjects",
      };

      const { items: fetchedOurProject } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Some of our projects")
        .find();

      return fetchedOurProject;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchPeopleReviewSlider = createAsyncThunk(
  "data/fetchPeopleReviewSlider",
  async () => {
    try {
      let options = {
        dataCollectionId: "PeopleReviewSlider",
      };

      const { items: fetchedPeopleReview } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Here's what people are saying.")
        .find();

      return fetchedPeopleReview;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchMarketSection = createAsyncThunk(
  "data/fetchMarketSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "MarketSection",
      };

      const { items: fetchedMarketSection } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Markets")
        .find();

      return fetchedMarketSection;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchRentalStoreSection = createAsyncThunk(
  "data/fetchRentalStoreSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "RentalStore",
      };

      const { items: fetchedRentalSection } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Rental Store")
        .find();

      return fetchedRentalSection;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchDreamBigSection = createAsyncThunk(
  "data/fetchDreamBigSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "DreamBigSection",
      };

      const { items: fetchedDreamBIgSection } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "dreambig")
        .find();

      return fetchedDreamBIgSection;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// HomeTop Section ////
      .addCase(fetchHomeTopData.pending, (state) => {
        state.homeTopLoading = true;
        state.error = null;
      })
      .addCase(fetchHomeTopData.fulfilled, (state, action) => {
        state.homeTopLoading = false;
        state.homeTopData = action.payload;
      })
      .addCase(fetchHomeTopData.rejected, (state, action) => {
        state.homeTopLoading = false;
        state.error = action.error.message;
      })
      /// GetTouchSeciotn Section ////
      .addCase(fetchGetTouchSection.pending, (state) => {
        state.getTouchLoading = true;
        state.error = null;
      })
      .addCase(fetchGetTouchSection.fulfilled, (state, action) => {
        state.getTouchLoading = false;
        state.getTouchData = action.payload;
      })
      .addCase(fetchGetTouchSection.rejected, (state, action) => {
        state.getTouchLoading = false;
        state.error = action.error.message;
      })
      /// Studio Section ////
      .addCase(fetchStudioSection.pending, (state) => {
        state.studioLoading = true;
        state.error = null;
      })
      .addCase(fetchStudioSection.fulfilled, (state, action) => {
        state.studioLoading = false;
        state.studioData = action.payload;
      })
      .addCase(fetchStudioSection.rejected, (state, action) => {
        state.studioLoading = false;
        state.error = action.error.message;
      })
      /// Our Project Section ////
      .addCase(fetchOurPorjectSection.pending, (state) => {
        state.studioLoading = true;
        state.error = null;
      })
      .addCase(fetchOurPorjectSection.fulfilled, (state, action) => {
        state.studioLoading = false;
        state.ourProjectData = action.payload;
      })
      .addCase(fetchOurPorjectSection.rejected, (state, action) => {
        state.studioLoading = false;
        state.error = action.error.message;
      })
      /// People Review Section ////
      .addCase(fetchPeopleReviewSlider.pending, (state) => {
        state.peopleReviewLoading = true;
        state.error = null;
      })
      .addCase(fetchPeopleReviewSlider.fulfilled, (state, action) => {
        state.peopleReviewLoading = false;
        state.peopleReviewData = action.payload;
      })
      .addCase(fetchPeopleReviewSlider.rejected, (state, action) => {
        state.peopleReviewLoading = false;
        state.error = action.error.message;
      })
      /// Market Section ////
      .addCase(fetchMarketSection.pending, (state) => {
        state.marketLoading = true;
        state.error = null;
      })
      .addCase(fetchMarketSection.fulfilled, (state, action) => {
        state.marketLoading = false;
        state.marketData = action.payload;
      })
      .addCase(fetchMarketSection.rejected, (state, action) => {
        state.marketLoading = false;
        state.error = action.error.message;
      })
       /// Rental Store Section ////
       .addCase(fetchRentalStoreSection.pending, (state) => {
        state.rentalLoading = true;
        state.error = null;
      })
      .addCase(fetchRentalStoreSection.fulfilled, (state, action) => {
        state.rentalLoading = false;
        state.rentalStoreData = action.payload;
      })
      .addCase(fetchRentalStoreSection.rejected, (state, action) => {
        state.rentalLoading = false;
        state.error = action.error.message;
      })
       /// Dream Big Section ////
       .addCase(fetchDreamBigSection.pending, (state) => {
        state.dreamBigLoading = true;
        state.error = null;
      })
      .addCase(fetchDreamBigSection.fulfilled, (state, action) => {
        state.dreamBigLoading = false;
        state.dreamBigData = action.payload;
      })
      .addCase(fetchDreamBigSection.rejected, (state, action) => {
        state.dreamBigLoading = false;
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
