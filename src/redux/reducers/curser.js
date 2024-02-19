import { createSlice } from "@reduxjs/toolkit";

const cursor = createSlice({
  name: "cursor",
  initialState: {
    variant: "default",
  },
  reducers: {
    setTextEnter: (state) => {
      state.variant = "text";
    },
    setTextLeave: (state) => {
      state.variant = "default";
    },
    setCardIn: (state) => {
      state.variant = "cardIn";
    },
  },
});

export const { setTextEnter, setTextLeave, setCardIn } = cursor.actions;
export default cursor.reducer;
