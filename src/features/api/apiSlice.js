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
    getVideo: builder.query({
      query: (videoId) => `/videos2/${videoId}`,
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(" ");
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos2?${likes.join("&")}&_limit=4`;
        return queryString;
      },
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } =
  apiSlice;
