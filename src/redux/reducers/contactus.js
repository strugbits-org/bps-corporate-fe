import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wixClientForm from "../wixClientForm";

const initialState = {
  formData: null,
  newletter: null,

  loading: false,
  error: null,
};

export const postFormData = createAsyncThunk(
  "contact/postFormData",
  async (formData) => {
    try {
      let submission = {
        formId: "287dbc30-d7fb-4e4c-b9ce-7c11047f69cf",
        status: "CONFIRMED",
        submissions: formData,
      };
      const response = await wixClientForm.submissions.createSubmission(
        submission
      );

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
      let submission = {
        formId: "cf9ecfbe-c453-4787-96d7-cea56975a924",
        status: "CONFIRMED",
        submissions: formData,
      };
      const response = await wixClientForm.submissions.createSubmission(
        submission
      );
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
        state.loading = false;
        state.success = true;
      })
      .addCase(postFormData.pending, (state) => {
        console.log("ispending");
        state.loading = true;
        state.success = false;
      })
      .addCase(postFormData.rejected, (state) => {
        console.log("is rejected");
        state.error = true;
        state.loading = false;
        state.success = false;
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
      });
  },
});

export default contactSlice.reducer;
