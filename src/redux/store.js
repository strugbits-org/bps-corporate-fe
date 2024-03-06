import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import contactReducer from "./reducers/contactus";
import homeReducer from "./reducers/homeData";
import aboutusReducer from "./reducers/aboutusData";
import contactusReducer from "./reducers/contatusData";
export default configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer,
    home: homeReducer,
    aboutus: aboutusReducer,
    contactus: contactusReducer
  },
 
});
