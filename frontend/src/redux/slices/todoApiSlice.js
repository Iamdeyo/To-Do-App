import { apiSlice } from './apiSlice';

const USER_URL = '/api/todos';

export const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => '/',
      providesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useCreateTodoMutation, useGetAllTodoQuery } = todoApiSlice;
