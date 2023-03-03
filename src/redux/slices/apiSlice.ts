import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RootState } from "../store";
import { removeCredentials, setCredentials } from "./authSlice";

export type MessageResponse = { message: string };

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_URL + "/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const authedBaseQuery: typeof baseQuery = async (args, api, extraOptions) => {
  let res = await baseQuery(args, api, extraOptions);
  if (res.error?.status === 401) {
    console.log("refreshing token");
    const refresh = await baseQuery("/auth/refresh", api, extraOptions);
    console.log(refresh);
    if (refresh.data) {
      api.dispatch(setCredentials(refresh.data));
      res = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(removeCredentials());
    }
  }
  return res;
};

export const apiSlice = createApi({
  baseQuery: authedBaseQuery,
  endpoints: () => ({}),
});
