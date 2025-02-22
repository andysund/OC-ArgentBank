// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // d'autres reducers si nécessaire
  },
});

export default store;
