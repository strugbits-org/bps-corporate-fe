import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { posts } from "@wix/blog";
import createWixClient from "../wixClient";

const wixClient = createWixClient();

// const blogwixClient = createClient({
//   modules: { posts },
//   auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
// });

const initialState = {
  // blogListData: [],
  blogPostData: [],

  // blogListLoading: false,
  blogPostLoading: false,
  error: null,
};

// export const getBlogList = createAsyncThunk("data/getBlogList", async () => {
//   try {
//     const response = await blogwixClient.posts.listPosts();

//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

export const getblogPostData = createAsyncThunk("data/getblogPostData", async () => {
  try {
    let options = {
      dataCollectionId: "Blog/Posts",
      includeReferencedItems: ["tags", "author"],
    };

    const { items: fetchedItems } = await wixClient.items
      .queryDataItems(options)
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
      // .addCase(getBlogList.pending, (state) => {
      //   state.portfolioDataLoading = true;
      //   state.error = null;
      // })
      // .addCase(getBlogList.fulfilled, (state, action) => {
      //   state.portfolioDataLoading = false;
      //   state.blogListData = action.payload;
      // })
      // .addCase(getBlogList.rejected, (state, action) => {
      //   state.portfolioDataLoading = false;
      //   state.error = action.error.message;
      // })
      /// test data posts ////
      .addCase(getblogPostData.pending, (state) => {
        state.blogPostLoading = true;
        state.error = null;
      })
      .addCase(getblogPostData.fulfilled, (state, action) => {
        state.blogPostLoading = false;
        state.blogPostData = action.payload;
      })
      .addCase(getblogPostData.rejected, (state, action) => {
        state.blogPostLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
