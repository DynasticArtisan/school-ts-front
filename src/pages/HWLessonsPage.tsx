import React from "react";
import { Link, useParams } from "react-router-dom";
import { Preloader } from "../components";
import { useGetCourseHomeworksLessonsQuery } from "../redux/api/coursesApi";

const HWLessonsPage = () => {
  const { courseId } = useParams();
  const { data: lessons } = useGetCourseHomeworksLessonsQuery(
    courseId as string
  );

  if (!lessons) {
    return <Preloader />;
  }

  return (
    <div>
      <Link to="/hw-courses">BACK</Link>
      <br />
      <br />
      <h1>HW LESSONS PAGE</h1>
      <br />
      <ul>
        {lessons.homeworks?.map((h: any) => (
          <li>
            <Link to={`/lessons/${h._id}/homeworks`}>{h._id}</Link>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HWLessonsPage;
