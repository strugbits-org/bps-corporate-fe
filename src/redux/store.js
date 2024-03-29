import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./reducers/appConfig";
import userReducer from "./reducers/user";
import contactReducer from "./reducers/contactus";
import homeReducer from "./reducers/homeData";
import aboutusReducer from "./reducers/aboutusData";
import contactusReducer from "./reducers/contatusData";
import porfolioReducer from "./reducers/portfolioData";
import marketReducer from "./reducers/marketData";
import servicesReducer from "./reducers/servicesData";
import blogReducer from "./reducers/blogData";
import footerReducer from "./reducers/footerData";
export default configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
    contact: contactReducer,
    home: homeReducer,
    aboutus: aboutusReducer,
    contactus: contactusReducer,
    portfolio: porfolioReducer,
    market: marketReducer,
    services: servicesReducer,
    footer: footerReducer,
    blog: blogReducer
  },
 
});
