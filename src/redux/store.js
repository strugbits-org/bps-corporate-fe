import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import curserReducer from "./reducers/curser";
export default configureStore({
  reducer: {
    user: userReducer,
    cursor: curserReducer
  },
 
});
