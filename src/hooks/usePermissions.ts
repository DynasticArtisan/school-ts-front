import React from "react";
import { UserRole } from "../types/usersTypes";
import useAppSelector from "./useTypedSelector";

interface Permissions {
  getNotes: boolean;
  getCourses: boolean;
  getUsers: boolean;
  getHomeworks: boolean;
}

const usePermissions = (): Permissions => {
  const role = useAppSelector((state) => state.auth.user.role);

  switch (role) {
    case UserRole.super:
      return {
        getNotes: false,
        getCourses: true,
        getUsers: true,
        getHomeworks: true,
      };
    case UserRole.admin:
      return {
        getNotes: false,
        getCourses: false,
        getUsers: true,
        getHomeworks: false,
      };
    case UserRole.teacher:
      return {
        getNotes: false,
        getCourses: true,
        getUsers: false,
        getHomeworks: true,
      };
    case UserRole.curator:
      return {
        getNotes: false,
        getCourses: true,
        getUsers: false,
        getHomeworks: true,
      };
    case UserRole.user:
      return {
        getNotes: true,
        getCourses: true,
        getUsers: false,
        getHomeworks: false,
      };
    default:
      return {
        getNotes: false,
        getCourses: false,
        getUsers: false,
        getHomeworks: false,
      };
  }
};

export default usePermissions;
