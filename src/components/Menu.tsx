import React, { FC, HTMLProps } from "react";
import stars from "../assets/svg/stars.svg";
import spark from "../assets/svg/spark.svg";
import { Link } from "react-router-dom";
import useAppSelector from "../hooks/useTypedSelector";
import usePermissions from "../hooks/usePermissions";

const Menu = () => {
  const user = useAppSelector((state) => state.auth.user);

  const { getCourses, getUsers, getHomeworks, getNotes } = usePermissions();

  return (
    <div className="menu">
      <Link className="menu__account-link" to="/settings">
        <div className="menu__account-image"></div>
        <div className="menu__account-text">
          <div className="menu__account-name">
            {user.name} {user.lastname}
          </div>
          <div className="menu__account-settings">Настройки акканута</div>
        </div>
        <div className="menu__account-role">
          <span>{user.role}</span>
          <img src={stars} />
        </div>
      </Link>

      {getUsers && (
        <Link className="menu__link" to="/users">
          Пользователи
        </Link>
      )}

      {getCourses && (
        <Link className="menu__link" to="/courses">
          Курсы
        </Link>
      )}

      {getHomeworks && (
        <Link className="menu__link" to="/hw-courses">
          Домашнее
          <br />
          задание
        </Link>
      )}

      {getNotes && (
        <Link className="menu__link" to={"/notes"}>
          Уведомления
          <img className="menu__note-spark" src={spark} />
        </Link>
      )}
    </div>
  );
};

export default Menu;
