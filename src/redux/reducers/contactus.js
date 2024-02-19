import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../utilis/services";

const initialState = {
  formData: null,
  loading: false,
  error: null,
};

export const postFormData = createAsyncThunk(
  "contact/postFormData",
  async (formData, thunkAPI) => {
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
        console.log("postFormData", payload);
        state.formData = payload;
        state.loader = false;
        state.success = true;
      })
      .addCase(postFormData.pending, (state) => {
        console.log("ispending");
        state.loader = true;
        state.success = false;
      })
      .addCase(postFormData.rejected, (state) => {
        console.log("is rejected");
        state.loader = false;
        state.success = false;
      });
  },

});

export const { submitFormSuccess, submitFormFailure } = contactSlice.actions;

export default contactSlice.reducer;
