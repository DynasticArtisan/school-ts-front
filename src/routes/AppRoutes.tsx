import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import {
  AccountPage,
  ActivationPage,
  AuthPage,
  CoursePage,
  CoursesPage,
  ForgotPasswordPage,
  HomeworkPage,
  HomeworksPage,
  HWCoursesPage,
  HWLessonsPage,
  LessonPage,
  ModulePage,
  NotesPage,
  NotFoundPage,
  ResetPasswordPage,
  SettingsPage,
  StudentPage,
  StudentsPage,
  UserPage,
  UsersPage,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="login" element={<AuthPage />} />

        <Route path="register" element={<AuthPage />} />

        <Route path="activate" element={<ActivationPage />} />

        <Route path="forgot" element={<ForgotPasswordPage />} />

        <Route path="reset" element={<ResetPasswordPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="account" element={<AccountPage />} />

        <Route path="settings" element={<SettingsPage />} />

        <Route path="notes" element={<NotesPage />} />

        <Route path="users" element={<UsersPage />} />

        <Route path="users/:userId" element={<UserPage />} />

        <Route path="courses/:courseId/students" element={<StudentsPage />} />

        <Route path="students/:studentId" element={<StudentPage />} />

        <Route path="courses" element={<CoursesPage />} />

        <Route path="courses/:courseId" element={<CoursePage />} />

        <Route path="modules/:moduleId" element={<ModulePage />} />

        <Route path="lessons/:lessonId" element={<LessonPage />} />

        <Route path="hw-courses" element={<HWCoursesPage />} />

        <Route
          path="courses/:courseId/hw-lessons"
          element={<HWLessonsPage />}
        />

        <Route path="lessons/:lessonId/homeworks" element={<HomeworksPage />} />

        <Route path="homeworks/:homeworkId" element={<HomeworkPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
