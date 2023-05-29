import { apiSlice } from './apiSlice';

const USER_URL = '/api/todos';

export const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => USER_URL,
      providesTags: ['Todo'],
    }),
    getTodayTodo: builder.query({
      query: () => `${USER_URL}/today`,
      providesTags: ['Todo'],
    }),
    getUpcomingTodo: builder.query({
      query: () => `${USER_URL}/upcoming`,
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
    updateTodo: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useCreateTodoMutation,
  useGetAllTodoQuery,
  useGetTodayTodoQuery,
  useGetUpcomingTodoQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApiSlice;
