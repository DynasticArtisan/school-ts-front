import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Preloader } from "../components";
import { useGetUserQuery } from "../redux/api/usersApi";

const UserPage = () => {
  const { userId } = useParams();
  const { data: user, isLoading, isError } = useGetUserQuery(userId as string);
  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <Navigate replace to="/users" />;
  }
  return (
    <div>
      <Link to="/users">BACK</Link>
      <br />
      <br />
      <h1>USER PAGE</h1>
      <br />
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.role}</p>
    </div>
  );
};

export default UserPage;
