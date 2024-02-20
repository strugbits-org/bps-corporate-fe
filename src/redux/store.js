import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import curserReducer from "./reducers/curser";
import contactReducer from "./reducers/contactus";
export default configureStore({
  reducer: {
    user: userReducer,
    cursor: curserReducer,
    contact: contactReducer
  },
 
});
