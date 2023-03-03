import React from "react";
import { Link } from "react-router-dom";
import useNotifications from "../hooks/useNotifications";

const NotesPage = () => {
  const { data } = useNotifications();

  return (
    <div>
      <Link to="/account">BACK</Link>
      <br />
      <br />
      <h1>NOTES PAGE</h1>
      <br />
      <ul>
        {data?.map((n: any) => (
          <li>
            <span>{n.title}</span>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;
