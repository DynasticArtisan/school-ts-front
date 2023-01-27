import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  GetUsers,
  GetCourses,
  GetCourseStudents,
  GetCourseModules,
  GetModuleLessons,
  GetHomeworksCourses,
  GetHomeworkCourseLessons,
  GetLessonHomeworks,
  Layout,
} from "../components";

import {
  Activate,
  Forgot,
  Account,
  Login,
  Register,
  Reset,
  SingleLesson,
  Settings,
  Notes,
  NotFound,
  CoursesList,
  CourseModulesList,
  ModuleLessonsList,
  CourseStudentsList,
  SingleStudent,
  LessonHomeworksList,
  SingleHomework,
  HWCourseLessonsList,
  HWCoursesList,
  UsersList,
  SingleUser,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="activate" element={<Activate />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="reset" element={<Reset />} />

          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notes" element={<Notes />} />

          <Route path="courses" element={<GetCourses />}>
            <Route index element={<CoursesList />} />
            <Route path=":courseId/modules" element={<GetCourseModules />}>
              <Route index element={<CourseModulesList />} />
              <Route path=":moduleId/lessons" element={<GetModuleLessons />}>
                <Route index element={<ModuleLessonsList />} />
                <Route path=":lessonId" element={<SingleLesson />} />
              </Route>
            </Route>
            <Route path=":courseId/students" element={<GetCourseStudents />}>
              <Route index element={<CourseStudentsList />} />
              <Route path=":studentId" element={<SingleStudent />} />
            </Route>
          </Route>

          <Route path="hw-courses" element={<GetHomeworksCourses />}>
            <Route index element={<HWCoursesList />} />
            <Route
              path=":courseId/lessons"
              element={<GetHomeworkCourseLessons />}
            >
              <Route index element={<HWCourseLessonsList />} />
              <Route
                path=":lessonId/homeworks"
                element={<GetLessonHomeworks />}
              >
                <Route index element={<LessonHomeworksList />} />
                <Route path=":homeworkId" element={<SingleHomework />} />
              </Route>
            </Route>
          </Route>

          <Route path="users" element={<GetUsers />}>
            <Route index element={<UsersList />} />
            <Route path=":userId" element={<SingleUser />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
