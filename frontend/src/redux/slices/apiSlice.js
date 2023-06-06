import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from '../../lib/Contants';

const baseQuery = fetchBaseQuery({ baseUrl: ENDPOINTS.BASEURL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Todo'],
  endpoints: (builder) => ({}),
});
