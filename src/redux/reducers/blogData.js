import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";
import { listBlogs } from "../../utilis/queryCollections";
import { fetchBlogTags, fetchCollection } from "../fetchCollection";

const initialState = {
  blogPostData: [],
  singleBlogData: [],
  blogTags: [],
  socialSectionBlogs: [],
  blogSectionDetails: [],

  socialSectionBlogsLoading: false,
  blogSectionDetailsLoading: false,
  singleBlogLoading: false,
  blogTagsLoading: false,
  blogPostLoading: false,
  error: null,
};

export const getblogPostData = createAsyncThunk(
  "data/getblogPostData",
  async ({ pageSize = 10, disableLoader = false, excludeItem = null }) => {
    try {
      const response = await listBlogs({ pageSize, disableLoader, excludeItem });
      const data = response._items.filter(item => item.data.blogRef._id !== undefined).map(item => item.data)
      handleCollectionLoaded();
      return data;
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const getSocialSectionBlogs = createAsyncThunk(
  "data/getSocialSectionBlogs",
  async () => {
    try {
      const response = await listBlogs({ pageSize: 9, disableLoader: true });
      const data = response._items.filter(item => item.data.blogRef._id !== undefined).map(item => item.data);
      handleCollectionLoaded();
      return data;
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const getBlogSectionDetails = createAsyncThunk(
  "data/getBlogSectionDetails",
  async () => {
    try {
      const data = {
        "dataCollectionId": "BlogSectionDetails",
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

export const fetchSingleBlog = createAsyncThunk(
  "data/fetchSingleBlog",
  async (slug) => {
    try {
      const data = {
        "dataCollectionId": "BlogProductData",
        "includeReferencedItems": ["blogRef", "author", "tags", "locationFilteredVariant", "storeProducts", "studios", "gallery", "media", "markets"],
        "returnTotalCount": null,
        "find": {},
        "contains": null,
        "eq": ["slug", slug],
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

export const getblogTags = createAsyncThunk("data/getblogTags", async (ids) => {
  try {
    const data = { "ids": ids }
    const response = await fetchBlogTags(data);
    return response._items;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const resetSingleBlog = createAsyncThunk("data/resetSinglePortfolio", async () => null);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetSingleBlog.fulfilled, (state, action) => {
        state.singleBlogData = action.payload;
      })
      .addCase(getBlogSectionDetails.pending, (state) => {
        state.blogSectionDetailsLoading = true;
        state.error = null;
      })
      .addCase(getBlogSectionDetails.fulfilled, (state, action) => {
        state.blogSectionDetailsLoading = false;
        state.blogSectionDetails = action.payload;
      })
      .addCase(getBlogSectionDetails.rejected, (state, action) => {
        state.blogSectionDetailsLoading = false;
        state.error = action.error.message;
      })

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
      })
      .addCase(fetchSingleBlog.pending, (state) => {
        state.singleBlogLoading = true;
        state.error = null;
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.singleBlogLoading = false;
        state.singleBlogData = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.singleBlogLoading = false;
        state.error = action.error.message;
      })
      .addCase(getSocialSectionBlogs.pending, (state) => {
        state.socialSectionBlogsLoading = true;
        state.error = null;
      })
      .addCase(getSocialSectionBlogs.fulfilled, (state, action) => {
        state.socialSectionBlogsLoading = false;
        state.socialSectionBlogs = action.payload;
      })
      .addCase(getSocialSectionBlogs.rejected, (state, action) => {
        state.socialSectionBlogsLoading = false;
        state.error = action.error.message;
      })
      .addCase(getblogTags.pending, (state) => {
        state.blogTagsLoading = true;
        state.error = null;
      })
      .addCase(getblogTags.fulfilled, (state, action) => {
        state.blogTagsLoading = false;
        state.blogTags = action.payload;
      })
      .addCase(getblogTags.rejected, (state, action) => {
        state.blogTagsLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
