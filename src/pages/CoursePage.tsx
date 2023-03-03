import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Preloader } from "../components";
import {
  useGetCourseModulesQuery,
  useGetCoursesQuery,
} from "../redux/api/coursesApi";
import {
  useCreateModuleMutation,
  useDeleteModuleMutation,
} from "../redux/api/modulesApi";
import { CreateModuleSchema } from "../schemas/modulesSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../ui";

const CoursePage = () => {
  const { courseId } = useParams();
  const { data: courses } = useGetCoursesQuery();
  const { data: course, isError } = useGetCourseModulesQuery(
    courseId as string
  );
  const [create, {}] = useCreateModuleMutation();
  const [deleteModule] = useDeleteModuleMutation();

  const { register, handleSubmit, formState } = useForm<CreateModuleSchema>({
    resolver: zodResolver(CreateModuleSchema),
    defaultValues: {
      courseId,
    },
  });

  if (isError) {
    return <Navigate to="/courses" replace />;
  }

  if (!courses || !course) {
    return <Preloader />;
  }

  return (
    <div>
      <Link to="/courses">BACK</Link>
      <br />
      <br />
      <h1>COURSE PAGE</h1>
      <br />
      <ul>
        {course?.modules.map((c: any) => (
          <li>
            <Link to={`/modules/${c._id}`}>{c.title}</Link>
            &nbsp;
            <span onClick={() => deleteModule(c._id)} style={{ color: "red" }}>
              REMOVE
            </span>
            <br />
            <br />
          </li>
        ))}
      </ul>
      <br />
      <form style={{ maxWidth: "400px" }} onSubmit={handleSubmit(create)}>
        <Input {...register("title")} invalid={Boolean(formState.errors.title)}>
          Заголовок
        </Input>
        <br />
        <Input
          {...register("description")}
          invalid={Boolean(formState.errors.description)}
        >
          Описание
        </Input>
        <br />
        <Button type="submit">Создать</Button>
        <br />
        <ul>
          {Object.entries(formState.errors).map(([key, err]) => (
            <li style={{ color: "red" }}>
              {key}: {err.message}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default CoursePage;
