import React from "react";
import { Outlet } from "react-router-dom";

const GetCourseStudents = () => {
  return (
    <>
      <div>GetCourseStudents</div>
      <Outlet />
    </>
  );
};

export default GetCourseStudents;
