import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/apiSlice";

const lessonsApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Lesson"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getLesson: builder.query<any, string>({
        query: (lessonId) => ({
          url: `lessons/${lessonId}`,
        }),
        providesTags: ["Lesson"],
      }),
      createLesson: builder.mutation({
        query: (payload) => ({
          url: "lessons",
          body: payload,
        }),
      }),
    }),
  });

// const lessonsSlice = createSlice({
//   name: "lessons",
//   initialState: {},
//   extraReducers: {},
// });

export default lessonsApi;

export const { useGetLessonQuery, useCreateLessonMutation } = lessonsApi;
