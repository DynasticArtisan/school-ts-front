import { CreateModuleSchema } from "../../schemas/modulesSchemas";
import { apiSlice } from "../slices/apiSlice";

const modulesApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Module", "Lesson"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getModuleLessons: builder.query<any, string>({
        query: (moduleId) => ({
          url: `modules/${moduleId}/lessons`,
        }),
        providesTags: (res) => [{ type: "Module", id: res._id }, "Lesson"],
      }),
      createModule: builder.mutation<any, CreateModuleSchema>({
        query: (payload) => ({
          url: `modules`,
          method: "POST",
          body: payload,
        }),
        invalidatesTags: (res) => [{ type: "Module", id: res._id }],
      }),
      deleteModule: builder.mutation<any, string>({
        query: (moduleId) => ({
          url: `modules/${moduleId}`,
          method: "DELETE",
        }),
        invalidatesTags: (res) => [{ type: "Module", id: res._id }],
      }),
    }),
  });

export const {
  useGetModuleLessonsQuery,
  useCreateModuleMutation,
  useDeleteModuleMutation,
} = modulesApi;
export default modulesApi;
