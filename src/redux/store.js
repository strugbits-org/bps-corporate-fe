import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import contactReducer from "./reducers/contactus";
export default configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer
  },
 
});
