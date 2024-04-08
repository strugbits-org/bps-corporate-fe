import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";

const wixClient = createWixClient();

const initialState = {
  homeSectionDetails: [],
  homeTopData: [],
  getTouchData: [],
  studioData: [],
  ourProjectData: [],
  peopleReviewData: [],
  marketData: [],
  rentalStoreData: [],
  dreamBigData: [],

  homeSectionDetailsLoading: false,
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


export const fetchHomeSectionDetails = createAsyncThunk(
  "data/fetchHomeSectionDetails",
  async () => {
    try {
      let options = { dataCollectionId: "HomeSectionDetails", };
      const { items } = await wixClient.items.queryDataItems(options).find();
      handleCollectionLoaded();
      return items.map((item) => item.data)[0];
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchHomeTopData = createAsyncThunk(
  "data/fetchDataItems",
  async () => {
    try {
      let options = {
        dataCollectionId: "HomeTopSectionData",
      };

      const { items: fetchHomeTopData } = await wixClient.items
        .queryDataItems(options)
        .find();
      handleCollectionLoaded();
      setTimeout(() => {
        document.querySelector(".stickyAnimationTrigger").click();
      }, 1000);
      return fetchHomeTopData;
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchGetTouchSection = createAsyncThunk(
  "data/fetchGetTouchSection",
  async () => {
    try {
      let options = {
        dataCollectionId: "GetInTouchSection",
      };

      const { items } = await wixClient.items
        .queryDataItems(options)
        .find();
        handleCollectionLoaded();
      return items;
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchStudioSection = createAsyncThunk(
  "data/fetchStudioSection",
  async (triggerAnimations = true) => {
    try {
      let options = {
        dataCollectionId: "StudiosSection",
      };

      const { items } = await wixClient.items
        .queryDataItems(options)
        .find();
        if (triggerAnimations) {
          handleCollectionLoaded();
        }
        setTimeout(() => {
          document.querySelector(".updateWatchedTrigger").click();
        }, 1000);
        const sortedList = items.sort((a, b) => a.data.orderNumber - b.data.orderNumber);
      return sortedList;
    } catch (error) {
      handleCollectionLoaded();
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
        .find();
        handleCollectionLoaded();
      return fetchedPeopleReview;
    } catch (error) {
      handleCollectionLoaded();
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
        .find();

      handleCollectionLoaded();
      return fetchedMarketSection;
    } catch (error) {
      handleCollectionLoaded();
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
        .find();
        handleCollectionLoaded();
        const response = fetchedRentalSection.sort((a, b) => (a.data.newimagetag === b.data.newimagetag) ? 0 : a.data.newimagetag ? -1 : 1);
      return response;
    } catch (error) {
      handleCollectionLoaded();
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
        .find();
        handleCollectionLoaded();
      return fetchedDreamBIgSection;
    } catch (error) {
      handleCollectionLoaded();
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
      .addCase(fetchHomeSectionDetails.pending, (state) => {
        state.homeSectionDetailsLoading = true;
        state.error = null;
      })
      .addCase(fetchHomeSectionDetails.fulfilled, (state, action) => {
        state.homeSectionDetailsLoading = false;
        state.homeSectionDetails = action.payload;
      })
      .addCase(fetchHomeSectionDetails.rejected, (state, action) => {
        state.homeSectionDetailsLoading = false;
        state.error = action.error.message;
      })
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
