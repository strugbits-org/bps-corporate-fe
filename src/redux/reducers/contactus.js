import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postForm } from "../fetchCollection";

const initialState = {
  formData: null,
  newletter: null,

  error: null,
  loading: false,
  success: false,

  errorForm: null,
  loadingForm: false,
  successForm: false,
};

export const postFormData = createAsyncThunk(
  "contact/postFormData",
  async (formData) => {
    try {
      const response = await postForm("contact", formData);
      console.log("response contact us", response);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const postNewsletter = createAsyncThunk(
  "contact/postNewsletter",
  async (formData) => {
    try {
      const response = await postForm("newsletter", formData);
      console.log("response newsletter", response);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postFormData.fulfilled, (state, { payload }) => {
        console.log("contact form", payload);
        state.formData = payload;
        state.loadingForm = false;
        state.successForm = true;
      })
      .addCase(postFormData.pending, (state) => {
        console.log("ispending");
        state.loadingForm = true;
        state.successForm = false;
      })
      .addCase(postFormData.rejected, (state) => {
        console.log("is rejected");
        state.errorForm = true;
        state.loadingForm = false;
        state.successForm = false;
      })
      .addCase(postNewsletter.fulfilled, (state, { payload }) => {
        console.log("newsletter data", payload);
        state.newletter = payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(postNewsletter.pending, (state) => {
        console.log("ispending");
        state.loading = true;
        state.success = false;
      })
      .addCase(postNewsletter.rejected, (state) => {
        console.log("is rejected");
        state.loading = false;
        state.success = false;
        state.error = true;
      });
  },
});

export default contactSlice.reducer;
