import { apiSlice, MessageResponse } from "../slices/apiSlice";
import {
  ActivationSchema,
  ForgotPasswordSchema,
  LoginSchema,
  RegistrationSchema,
  ResetPasswordSchema,
} from "../../schemas/authSchemas";

type AuthResponse = {
  user: any;
  accessToken: string;
};

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginSchema>({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    refresh: builder.query<AuthResponse, void>({
      query: () => ({
        url: "auth/refresh",
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
    registry: builder.mutation<MessageResponse, RegistrationSchema>({
      query: (payload) => ({
        url: "auth/registration",
        method: "POST",
        body: payload,
      }),
    }),
    // TODO: send token
    activate: builder.mutation<MessageResponse, ActivationSchema>({
      query: (payload) => ({
        url: "auth/activation",
        method: "POST",
        body: payload,
      }),
    }),
    forgot: builder.mutation<MessageResponse, ForgotPasswordSchema>({
      query: (payload) => ({
        url: "auth/forgotpassword",
        method: "POST",
        data: payload,
      }),
    }),
    // TODO: send token
    reset: builder.mutation<MessageResponse, ResetPasswordSchema>({
      query: (payload) => ({
        url: "auth/resetpassword",
        method: "POST",
        data: payload,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRefreshQuery,
  useLogoutMutation,
  useRegistryMutation,
  useActivateMutation,
  useForgotMutation,
  useResetMutation,
} = authApi;
export default authApi;
