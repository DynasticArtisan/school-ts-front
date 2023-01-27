import React from "react";
import { Outlet } from "react-router-dom";

const GetCourses = () => {
  return (
    <>
      <div>GetCourses</div>
      <Outlet />
    </>
  );
};

export default GetCourses;
