import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";
import { fetchCollection } from "../fetchCollection";

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
  rentalStoreSubtitle: [],

  rentalStoreSubtitleLoading: false,
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
      const data = {
        "dataCollectionId": "HomeSectionDetails",
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

export const fetchHomeTopData = createAsyncThunk(
  "data/fetchDataItems",
  async () => {
    try {
      const data = {
        "dataCollectionId": "HomeTopSectionData",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);

      handleCollectionLoaded();
      setTimeout(() => {
        document.querySelector(".stickyAnimationTrigger").click();
      }, 1000);

      return response._items.map((x) => x.data)[0];
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
      const data = {
        "dataCollectionId": "GetInTouchSection",
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

export const fetchStudioSection = createAsyncThunk(
  "data/fetchStudioSection",
  async () => {
    try {
      const data = {
        "dataCollectionId": "StudiosSection",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
      }, 1000);
      return response._items.map((x) => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchPeopleReviewSlider = createAsyncThunk(
  "data/fetchPeopleReviewSlider",
  async () => {
    try {
      const data = {
        "dataCollectionId": "PeopleReviewSlider",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      return response._items.map((x) => x.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchRentalStoreSection = createAsyncThunk(
  "data/fetchRentalStoreSection",
  async () => {
    try {
      const data = {
        "dataCollectionId": "RentalStore",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      handleCollectionLoaded();
      return response._items.map(x => x.data).sort((a, b) => (a.newimagetag === b.newimagetag) ? 0 : a.newimagetag ? -1 : 1);
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchRentalStoreSubtitle = createAsyncThunk(
  "data/fetchRentalStoreSubtitle",
  async () => {
    try {
      const data = {
        "dataCollectionId": "HomeRentalStoreSubtitleStyled",
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

export const fetchDreamBigSection = createAsyncThunk(
  "data/fetchDreamBigSection",
  async () => {
    try {
      const data = {
        "dataCollectionId": "DreamBigSection",
        "includeReferencedItems": null,
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": null,
        "limit": null
      }
      const response = await fetchCollection(data);
      return response._items.map(x => x.data)[0];
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
      .addCase(fetchRentalStoreSubtitle.pending, (state) => {
        state.rentalStoreSubtitleLoading = true;
        state.error = null;
      })
      .addCase(fetchRentalStoreSubtitle.fulfilled, (state, action) => {
        state.rentalStoreSubtitleLoading = false;
        state.rentalStoreSubtitle = action.payload;
      })
      .addCase(fetchRentalStoreSubtitle.rejected, (state, action) => {
        state.rentalStoreSubtitleLoading = false;
        state.error = action.error.message;
      })
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
