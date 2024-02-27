import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../utilis/services";

const initialState = {
  formData: null,
  loading: false,
  error: null,
};

export const postFormData = createAsyncThunk(
  "contact/postFormData",
  async (formData) => {
    try {
      const response = await API.post(
        "https://dummyendpoint.com/submit",
        formData
      );
      return response.data;
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
        // console.log("postFormData", payload);
        state.formData = payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(postFormData.pending, (state) => {
        // console.log("ispending");
        state.loading = true;
        state.success = false;
      })
      .addCase(postFormData.rejected, (state) => {
        // console.log("is rejected");
        state.loading = false;
        state.success = false;
      });
  },

});

export default contactSlice.reducer;
