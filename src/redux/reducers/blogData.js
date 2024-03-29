import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/pageLoadingAnimation";
import SingleBlogWixClient from "../wixClientSingleBlog";
import { listBlogs } from "../../utilis/queryCollections";

const wixClient = createWixClient();

const initialState = {
  blogPostData: [],
  singleBlogData: [],
  blogTags: [],

  singleBlogLoading: false,
  blogTagsLoading: false,
  blogPostLoading: false,
  error: null,
};

export const getblogPostData = createAsyncThunk(
  "data/getblogPostData",
  async ({pageSize = 10, disableLoader = false}) => {
    try {
      const response = await listBlogs({ pageSize, disableLoader });
      const data = response.items.filter(item => item.data.blogRef._id !== undefined).map(item => item.data)
      handleCollectionLoaded();
      return data;
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const fetchSingleBlog = createAsyncThunk(
  "data/fetchSingleBlog",
  async (slug) => {
    try {
      let options = {
        dataCollectionId: "BlogProductData",
        includeReferencedItems: [
          "blogRef",
          "author",
          "tags",
          "locationFilteredVariant",
          "storeProducts",
          "studios",
          "gallery",
          "media",
          "markets",
        ],
      };
      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", slug)
        .find();

      handleCollectionLoaded();
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
      }, 1000);

      const data = fetchedItems.map((item) => item.data);
      return data[0];
    } catch (error) {
      handleCollectionLoaded();
      throw new Error(error.message);
    }
  }
);

export const getblogTags = createAsyncThunk("data/getblogTags", async (id) => {
  try {
    const { items } = await SingleBlogWixClient.tags.queryTags().hasSome('_id', id).find();

    return items;
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
