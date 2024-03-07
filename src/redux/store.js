import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./reducers/user";
import contactReducer from "./reducers/contactus";
import homeReducer from "./reducers/homeData";
import aboutusReducer from "./reducers/aboutusData";
import contactusReducer from "./reducers/contatusData";
import porfolioReducer from "./reducers/portfolioData";
import marketReducer from "./reducers/marketData";
import servicesReducer from "./reducers/servicesData";

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  // No whitelist or blacklist specified, all reducers will be persisted by default
};

// Combine reducers using combineReducers
const rootReducer = combineReducers({
  user: userReducer,
  contact: contactReducer,
  home: homeReducer,
  aboutus: aboutusReducer,
  contactus: contactusReducer,
  portfolio: porfolioReducer,
  market: marketReducer,
  services: servicesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor }; 
