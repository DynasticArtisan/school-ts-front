import React from "react";
import { Outlet } from "react-router-dom";

const GetUsers = () => {
  return (
    <>
      <div>GetUsers</div>
      <Outlet />
    </>
  );
};

export default GetUsers;
