import React from "react";
import { Link } from "react-router-dom";
import { Preloader } from "../components";
import { useGetCoursesQuery } from "../redux/api/coursesApi";

const CoursesPage = () => {
  const { data: userCourses } = useGetCoursesQuery();

  return (
    <div>
      <Link to="/account">BACK</Link>
      <br />
      <br />
      <h1>COURSES PAGE</h1>
      <br />
      <ul>
        {userCourses?.map((c: any) => (
          <li>
            <Link to={`/courses/${c._id}`}>
              {c.title}
              <br />
              <br />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
