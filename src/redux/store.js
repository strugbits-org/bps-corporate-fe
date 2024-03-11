import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import contactReducer from "./reducers/contactus";
import homeReducer from "./reducers/homeData";
import aboutusReducer from "./reducers/aboutusData";
import contactusReducer from "./reducers/contatusData";
import porfolioReducer from "./reducers/portfolioData";
import marketReducer from "./reducers/marketData";
import servicesReducer from "./reducers/servicesData";
import blogReducer from "./reducers/blogData";
export default configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer,
    home: homeReducer,
    aboutus: aboutusReducer,
    contactus: contactusReducer,
    portfolio: porfolioReducer,
    market: marketReducer,
    services: servicesReducer,
    blog: blogReducer
  },
 
});
