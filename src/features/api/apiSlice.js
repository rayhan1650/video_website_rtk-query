import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lwsredux.herokuapp.com",
  }),

  tagTypes: ["Videos", "Video", "RelatedVideos"],

  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos2",
      providesTags: ["Videos"],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos2/${videoId}`,
      providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(" ");
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos2?${likes.join("&")}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: "RelatedVideos", id: arg.id },
      ],
    }),

    addVideo: builder.mutation({
      query: (data) => ({
        url: `/videos2`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    }),

    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos2/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Videos",
        { type: "Video", id: arg.id },
        { type: "RelatedVideos", id: arg.id },
      ],
    }),

    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos2/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useAddVideoMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = apiSlice;
