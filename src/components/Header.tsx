import React, { FC, MouseEvent, useCallback, useState } from "react";
import cns from "classnames";
import useMediaMatches from "../hooks/useMediaMatches";

import tabletLogoImage from "../assets/images/header-logo-tablet.png";
import desctoplogoImage from "../assets/images/header-logo.png";
import defaultAvatarImage from "../assets/avatars/default.png";
import notesSparkImage from "../assets/images/spark.png";

import { Link } from "react-router-dom";
import useAppSelector from "../hooks/useTypedSelector";
import { useLogoutMutation } from "../redux/api/authApi";
import useAppDispatch from "../hooks/useAppDispatch";
import { removeCredentials } from "../redux/slices/authSlice";

const Header: FC = () => {
  const match = useMediaMatches();
  const user = useAppSelector((state) => state.auth.user);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(removeCredentials());
    } catch (error) {}
  };

  const [menu, openMenu] = useState(false);
  const closeMenuHandler = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    openMenu(false);
    window.removeEventListener("click", closeMenuHandler as any);
  }, []);
  const openMenuHandler = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    openMenu(true);
    window.addEventListener("click", closeMenuHandler as any);
  }, []);

  return (
    <div className="header">
      <Link to={"/"} className="header__logo">
        <img
          src={match.tablet ? tabletLogoImage : desctoplogoImage}
          alt="Онлайн школа Актив"
        />
      </Link>
      {user && (
        <>
          <Link to="/account" className="header__profile">
            <span className="header__profile-name">{user.name}</span>
            <img
              src={defaultAvatarImage}
              alt="Алексей"
              className="header__profile-avatar"
            />
          </Link>

          {!match.tablet ? (
            <button
              className="header__logout"
              type="button"
              onClick={logoutHandler}
            >
              Выйти
            </button>
          ) : (
            <>
              <button
                className="header__burger"
                onClick={menu ? closeMenuHandler : openMenuHandler}
              >
                <span className="header__burger-line"></span>
              </button>

              <div
                className={cns("header__menu", { _open: menu })}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="header__menu-close"
                  type="button"
                  onClick={closeMenuHandler}
                />
                <nav className="header__menu-nav">
                  <Link
                    to="/courses"
                    className="header__menu-link"
                    onClick={closeMenuHandler}
                  >
                    Мои курсы
                  </Link>
                  <Link
                    to="/users"
                    className="header__menu-link"
                    onClick={closeMenuHandler}
                  >
                    Пользователи
                  </Link>
                  <Link
                    to="/hw-courses"
                    className="header__menu-link"
                    onClick={closeMenuHandler}
                  >
                    Домашние задания
                  </Link>
                  <Link
                    to="/notes"
                    className="header__menu-link"
                    onClick={closeMenuHandler}
                  >
                    Уведомления
                    <img
                      className="header__menu-spark"
                      src={notesSparkImage}
                      alt="Новое уведомление"
                    />
                  </Link>
                  <Link
                    to="/settings"
                    className="header__menu-link"
                    onClick={closeMenuHandler}
                  >
                    Настройки
                  </Link>
                  <button
                    type="button"
                    className="header__menu-link"
                    onClick={logoutHandler}
                  >
                    Выйти
                  </button>
                </nav>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
