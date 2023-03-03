import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { Preloader } from "../components";
import { useGetCoursesQuery } from "../redux/api/coursesApi";
import modulesApi, { useGetModuleLessonsQuery } from "../redux/api/modulesApi";

const ModulePage = () => {
  const dispatch = useDispatch();
  const { moduleId } = useParams();
  const { data: courses } = useGetCoursesQuery();
  const { data: module, isError } = useGetModuleLessonsQuery(
    moduleId as string
  );

  if (isError) {
    return <Navigate to="/courses" replace />;
  }
  if (!courses || !module) {
    return <Preloader />;
  }
  return (
    <div>
      <Link to={module ? `/courses/${module.course}` : "/courses"}>BACK</Link>
      <br />
      <br />
      <h1>MODULE PAGE</h1>
      <br />
      <ul>
        {module?.lessons.map((c: any) => (
          <li>
            <Link to={`/lessons/${c._id}`}>{c.title}</Link>
            <br />
            <br />
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default ModulePage;
