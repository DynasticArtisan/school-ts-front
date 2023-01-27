import { FC, ReactNode } from "react";
import cns from "classnames";
import { Link, useLocation } from "react-router-dom";

const AuthForm: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="auth-form">
      <div className="auth-form__links">
        <Link
          to="/register"
          className={cns("auth-form__links-item", {
            _current: location.pathname === "/register",
          })}
        >
          Регистрация
        </Link>

        <Link
          to="/login"
          className={cns("auth-form__links-item", {
            _current: location.pathname === "/login",
          })}
        >
          Вход
        </Link>
      </div>
      {children}
    </div>
  );
};

export default AuthForm;
