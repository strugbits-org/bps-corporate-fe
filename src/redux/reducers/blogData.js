import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createWixClient from "../wixClient";
import { handleCollectionLoaded } from "../../utilis/loadAnimations";
// import SingleBlogWixClient from "../wixClientSingleBlog";


const wixClient = createWixClient();

const initialState = {
  blogPostData: [],
singleBlogData: [],

singleBlogLoading:false,
  blogPostLoading: false,
  error: null,
};

export const getblogPostData = createAsyncThunk(
  "data/getblogPostData",
  async (triggerAnimations = true) => {
    try {
      let options = {
        dataCollectionId: "BlogProductData",
        includeReferencedItems: ["blogRef", "locationFilteredVariant", "storeProducts", "studios", "markets","author"],
      };
  
      const { items: fetchedItems } = await wixClient.items.queryDataItems(options).find();
      if (triggerAnimations) {
        handleCollectionLoaded();
        setTimeout(() => {
          document.querySelector(".updateWatchedTrigger").click();
        }, 1000);
      }
      const data = fetchedItems.map((item)=> item.data);
      console.log(data);
      return data;
    } catch (error) {
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
        includeReferencedItems: ["blogRef", "locationFilteredVariant", "storeProducts", "studios", "markets"],
      };
      const { items: fetchedItems } = await wixClient.items
      .queryDataItems(options)
      .eq("slug", slug).find();

      handleCollectionLoaded();
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
      }, 1000);

      const data = fetchedItems.map((item)=> item.data);
      return data[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


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
      });
  },
});

export default blogSlice.reducer;
