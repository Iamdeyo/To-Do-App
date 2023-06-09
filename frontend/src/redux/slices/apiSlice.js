import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dtodo-api.onrender.com/',
  prepareHeaders: (headers, api) => {
    const token = api.getState().auth?.userInfo?.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Todo'],
  endpoints: (builder) => ({}),
});
