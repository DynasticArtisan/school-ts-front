import { createSlice } from "@reduxjs/toolkit";
import authApi from "../api/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as any,
    accessToken: null as string | null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    removeCredentials: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: {},
});

export const { setCredentials, removeCredentials } = authSlice.actions;
export default authSlice;
