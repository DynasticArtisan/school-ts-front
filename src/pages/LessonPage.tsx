import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Preloader } from "../components";
import { useGetLessonQuery } from "../redux/api/lessonsApi";

const LessonPage = () => {
  const { lessonId } = useParams();
  const { data: lesson, isError } = useGetLessonQuery(lessonId as string);

  if (isError) {
    return <Navigate to="/courses" replace />;
  }
  if (!lesson) {
    return <Preloader />;
  }
  return (
    <div>
      <Link to={`/modules/${lesson.module}`}>BACK</Link>
      <br />
      <br />
      <h1>LESSON PAGE</h1>
    </div>
  );
};

export default LessonPage;
