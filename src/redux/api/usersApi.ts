import { User } from "../../types/usersTypes";
import { apiSlice, MessageResponse } from "../slices/apiSlice";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: "users",
      }),
    }),

    getUser: builder.query<User, string>({
      query: (userId) => ({
        url: `users/${userId}`,
      }),
    }),

    getUserCourses: builder.query<User, string>({
      query: (userId) => ({
        url: `users/${userId}/courses`,
      }),
    }),

    updateUserRole: builder.mutation<
      MessageResponse,
      { userId: string; role: string }
    >({
      query: ({ userId, role }) => ({
        url: `users/${userId}/role`,
        method: "PATCH",
        data: { role },
      }),
    }),

    deleteUser: builder.mutation<MessageResponse, string>({
      query: (userId) => ({
        url: `users/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetUserCoursesQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = usersApi;
