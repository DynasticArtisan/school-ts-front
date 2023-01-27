import React from "react";
import { Outlet } from "react-router-dom";

const GetCourseModules = () => {
  return (
    <>
      <div>GetCourseModules</div>
      <Outlet />
    </>
  );
};

export default GetCourseModules;
