import { apiSlice } from "../slices/apiSlice";

const coursesApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["UserCourses", "Course", "Student", "Module", "Lesson"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCourses: builder.query<any, void>({
        query: () => ({
          url: "courses",
        }),
        providesTags: ["UserCourses", "Course"],
      }),

      getCourseModules: builder.query<any, string>({
        query: (courseId) => ({
          url: `courses/${courseId}/modules`,
        }),
        providesTags: (res) => [
          "Course",
          ...res.modules.map(({ _id }: any) => ({ type: "Module", id: _id })),
        ],
      }),

      getCourseStudents: builder.query<any, string>({
        query: (courseId) => ({
          url: `courses/${courseId}/students`,
        }),
        providesTags: ["Course", "Student"],
      }),

      getCourseHomeworksLessons: builder.query<any, string>({
        query: (courseId) => ({
          url: `courses/${courseId}/homeworks-lessons`,
        }),
        providesTags: ["Course", "Lesson"],
      }),

      createCourse: builder.mutation({
        query: (payload) => ({
          url: "courses",
          method: "POST",
          data: payload,
        }),
        invalidatesTags: ["Course"],
      }),
    }),
  });

export const {
  useGetCoursesQuery,
  useGetCourseModulesQuery,
  useGetCourseStudentsQuery,
  useGetCourseHomeworksLessonsQuery,
} = coursesApi;
