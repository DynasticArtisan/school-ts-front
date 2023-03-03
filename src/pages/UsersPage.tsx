import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../redux/api/usersApi";

const UsersPage = () => {
  const { data: users } = useGetUsersQuery();
  return (
    <div>
      <Link to="/account">BACK</Link>
      <br />
      <br />
      <h1>USERS PAGE</h1>
      <br />
      <ul>
        {users?.map((u) => (
          <li>
            <Link to={u._id}>
              {u.name} {u.lastname} {u.email}
            </Link>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
