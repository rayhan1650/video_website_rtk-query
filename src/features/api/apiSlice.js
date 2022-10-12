import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lwsredux.herokuapp.com",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos2",
    }),
  }),
});

export const { useGetVideosQuery } = apiSlice;
