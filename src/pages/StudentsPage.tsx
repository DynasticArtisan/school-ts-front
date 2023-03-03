import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Preloader } from "../components";
import { useGetCourseStudentsQuery } from "../redux/api/coursesApi";

const StudentsPage = () => {
  const { courseId } = useParams();
  const { data: course, isError } = useGetCourseStudentsQuery(
    courseId as string
  );

  if (isError) {
    return <Navigate to="/courses" />;
  }

  if (!course) {
    return <Preloader />;
  }

  return (
    <div>
      <Link to="/courses">BACK</Link>
      <br />
      <br />
      <h1>STUDENTS PAGE</h1>
      <br />
      <ul>
        {course.students?.map((c: any) => (
          <li>
            <Link to={`/students/${c._id}`}>
              {c.user.name} {c.user.lastname}
            </Link>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsPage;
