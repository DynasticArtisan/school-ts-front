import React from "react";
import { Link, useMatches } from "react-router-dom";
import Menu from "../components/Menu";
import useMediaMatches from "../hooks/useMediaMatches";
import useNotifications from "../hooks/useNotifications";
import { Button } from "../ui";
import greetImg from "../assets/images/greetings.png";

const AccountPage = () => {
  const { hasNew } = useNotifications();
  const { tablet } = useMediaMatches();
  return (
    <div className="account-page">
      {!tablet && <Menu />}

      <div className="account-page__greetings">
        <div className="accout-page__greetings-column">
          <div className="accout-page__greetings-title">Добро пожаловать!</div>
          <div className="accout-page__greetings-text">
            Это ваш личный кабинет.... Какой-то текст о том, какие есть
            возможности в личном кабинете... Например, можно рассказать о том,
            что и в каких вкладках можно сделать.
            <br />
            <br />
            В настройках аккаунта ....
            <br />
            <br />
            Мои курсы.....
            <br />
            <br />
            Уведомления..... <br />
            <br />
          </div>
          <Link to="/courses" className="accout-page__greetings-btn">
            <Button>Начать обучние</Button>
          </Link>
        </div>
        <div className="accout-page__greetings-image">
          <img src={greetImg} alt="Добро пожаловать!" />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
