import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create async thunks
export const GetUserById = createAsyncThunk("users/profiles", async () => {
  try {
    // fetch data here
  } catch (err) {
    console.log(err);
  }
});

export const BluePrintUser = createSlice({
  name: "BluePrintUser",
  initialState: {
    user: {},
    loader: false,
    errorMsg: null,
    success: false,
  },
  reducers: {
    login: (state, action) => {
      //payload here
      state.errorMsg = null;
    },
    logout: (state, action) => {
      //payload here
      state.errorMsg = null;
    },
    user: (state, action) => {
      //payload here
    },
    extraReducers: (builder) => {
        
      builder
      .addCase(GetUserById.fulfilled, (state, { payload }) => {
        console.log("GetUserById", payload);
        state.user = payload;
        state.loader = false;
        state.success = true;
      })
      .addCase(GetUserById.pending, (state) => {
        console.log("ispending");
        state.loader = true;
        state.success = false;
      })
      .addCase(GetUserById.rejected, (state) => {
        console.log("is rejected");
        state.loader = false;
        state.success = false;
      })
      
    },
  },
});

export const {login,logout} = BluePrintUser.actions;
export default BluePrintUser.reducer;