import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import contentReducer from "./slices/content.slice";
import authReducer from "./slices/auth.slice";

const reducer = combineReducers({
  auth: authReducer.reducer,
  contents: contentReducer
});

const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;