import React from "react";
import { Link } from "react-router-dom";
import { useGetCoursesQuery } from "../redux/api/coursesApi";

const HWCoursesPage = () => {
  const { data: userCourses } = useGetCoursesQuery();

  return (
    <div>
      <Link to="/account">BACK</Link>
      <br />
      <br />
      <h1>HW COURSES PAGE</h1>
      <br />
      <ul>
        {userCourses?.map((c: any) => (
          <li>
            <Link to={`/courses/${c._id}/hw-lessons`}>
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

export default HWCoursesPage;
