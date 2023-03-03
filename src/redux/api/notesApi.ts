import { apiSlice } from "../slices/apiSlice";

const notesApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Notes"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getNotes: builder.query<any, void>({
        query: () => ({
          url: "notes",
        }),
        providesTags: ["Notes"],
      }),

      checkNotes: builder.query<any, void>({
        query: () => ({
          url: "notes/check",
        }),
      }),
    }),
  });

export const { useCheckNotesQuery, useGetNotesQuery } = notesApi;
