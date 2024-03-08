import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { posts } from "@wix/blog";
import getFullImageURL from "../../common/common_functions/imageURL";

const wixClient = createClient({
  modules: { posts },
  auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
});

const initialState = {
  blogListData: [],
  blogAuth: [],
  blogListLoading: false,
  error: null,
};

export const getBlogList = createAsyncThunk("data/getBlogList", async () => {
  try {
    const response = await wixClient.posts.listPosts();

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const postData = createAsyncThunk("data/postData", async () => {
  try {
    let options = {
      dataCollectionId: "Posts",
      includeReferencedItems: ["tags"],
    };

    const { items: fetchedItems } = await wixClient.items
      .queryDataItems(options)
      .eq("language", "en" )
      .find();
    return fetchedItems;
  } catch (error) {
    throw new Error(error.message);
  }
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// all blog posts ////
      .addCase(getBlogList.pending, (state) => {
        state.portfolioDataLoading = true;
        state.error = null;
      })
      .addCase(getBlogList.fulfilled, (state, action) => {
        state.portfolioDataLoading = false;
        state.blogListData = action.payload;
      })
      .addCase(getBlogList.rejected, (state, action) => {
        state.portfolioDataLoading = false;
        state.error = action.error.message;
      })
      /// blog auth posts ////
      .addCase(postData.pending, (state) => {
        state.portfolioDataLoading = true;
        state.error = null;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.portfolioDataLoading = false;
        state.blogAuth = action.payload;
      })
      .addCase(postData.rejected, (state, action) => {
        state.portfolioDataLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
