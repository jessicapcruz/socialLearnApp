// import { createStore } from 'redux';
// import rootReducer from './reducers/rootReducer';

// export const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slices/content.slice";
import authSlice from "./slices/auth.slice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    contents: contentReducer,
  },
});