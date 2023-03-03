import React from "react";
import cns from "classnames";
import { Link, useLocation } from "react-router-dom";
import { LoginForm, RegisterForm } from "../components";

const AuthPages = [
  {
    url: "/login",
    title: "Вход",
    element: <LoginForm />,
  },
  {
    url: "/register",
    title: "Регистрация",
    element: <RegisterForm />,
  },
];

const AuthPage = () => {
  const location = useLocation();

  return (
    <div className="auth-form">
      <div className="auth-form__links">
        {AuthPages.map(({ url, title }) => (
          <Link
            to={url}
            key={url}
            className={cns("auth-form__links-item", {
              _current: location.pathname === url,
            })}
          >
            {title}
          </Link>
        ))}
      </div>
      {AuthPages.find(({ url }) => location.pathname === url)?.element}
    </div>
  );
};

export default AuthPage;
