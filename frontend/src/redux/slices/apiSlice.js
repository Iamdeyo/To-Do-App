import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dtodo-api.onrender.com/',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userInfo.token}`,
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Todo'],
  endpoints: (builder) => ({}),
});
