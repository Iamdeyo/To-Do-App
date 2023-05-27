import { configureStore } from '@reduxjs/toolkit';
import { authApiSlice } from './slices/authApiSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
  devTools: true,
});

export default store;
