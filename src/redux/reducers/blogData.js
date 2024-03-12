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
  async () => {
    try {
      let options = {
        dataCollectionId: "Blog/Posts",
        includeReferencedItems: ["tags", "author", "categories"],
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .find();

      var CategoriesArray = [];

      const portfolioArray = fetchedItems.map((item) => {
        item.data.categories = item.data.categories.map((tag) => {
          CategoriesArray.push(tag.label);
          return tag.label;
        });
        return item.data;
      });

      const uniqueCategories = [
        ...new Map(CategoriesArray.map((item) => [item, item])).values(),
      ];
      handleCollectionLoaded();
      return {
        data: portfolioArray,
        Categories: uniqueCategories,
      };
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
      dataCollectionId: "Blog/Posts",
        includeReferencedItems: ["tags", "author", "categories"],
    };

    const { items: fetchedItems } = await wixClient.items
      .queryDataItems(options)
      .eq("_id", slug)
      .find();

return fetchedItems;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// export const fetchSingleBlog = createAsyncThunk(
//   "data/fetchSingleBlog",
//   async (slug) => { 
//     try {  
//       const tokens = await SingleBlogWixClient.auth.generateVisitorTokens();
//       await SingleBlogWixClient.auth.setTokens(tokens);
      
//       const post = await SingleBlogWixClient.posts.getPost(slug, {
//         fieldsToInclude: [
//           "RICH_CONTENT",
//           "RICH_CONTENT_STRING",
//           "RICH_CONTENT_COMPRESSED",
//           "CONTENT_TEXT",
//           "CONTENT",
//         ],
//         includeReferencedItems: ["tags", "author", "categories","memberId"],
//       });

// return post;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

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
