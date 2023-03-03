import React from "react";
import { Link, useParams } from "react-router-dom";

const StudentPage = () => {
  const { studentId } = useParams();
  return (
    <div>
      <Link to="/courses">BACK</Link>
      <br />
      <br />
      <h1>STUDENT PAGE</h1>
      <br />
      <p>{studentId}</p>
    </div>
  );
};

export default StudentPage;
