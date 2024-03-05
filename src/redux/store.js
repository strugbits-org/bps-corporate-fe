import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import contactReducer from "./reducers/contactus";
import homeReducer from "./reducers/homeData";
import aboutusReducer from "./reducers/aboutusData";

export default configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer,
    home: homeReducer,
    aboutus: aboutusReducer
  },
 
});
