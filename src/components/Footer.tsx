import React, { FC } from "react";
import { Link } from "react-router-dom";
import { vkIcon, instIcon, tlgrIcon, ytbIcon } from "../assets/images/socials";
import logoImage from "../assets/images/footer-logo.png";

import useMediaMatches from "../hooks/useMediaMatches";

const Footer: FC = () => {
  const { desctop } = useMediaMatches();
  return (
    <div className="footer">
      {desctop || (
        <Link to="/" className="footer__logo">
          <img src={logoImage} alt="Онлайн школа Актив" />
        </Link>
      )}

      <div className="footer__grid">
        <a
          href="mailto:help@school-active.com"
          className="footer__contact-link"
        >
          help@school-active.com
        </a>
        <a href="tel:+7 921 843 18 77" className="footer__contact-link">
          +7 921 843 18 77
        </a>
        <div className="footer__social">
          <a href="#" className="footer__social-link">
            <img src={vkIcon} alt="Вконтакте" />
          </a>
          <a href="#" className="footer__social-link">
            <img src={instIcon} alt="Instagram" />
          </a>
          <a href="#" className="footer__social-link">
            <img src={tlgrIcon} alt="Telegram" />
          </a>
          <a href="#" className="footer__social-link">
            <img src={ytbIcon} alt="YouTube" />
          </a>
        </div>
        <div className="footer__list">
          <a href="#" className="footer__nav-link">
            Политика конфиденциальности
          </a>
          <a href="#" className="footer__nav-link">
            Договор-оферта
          </a>
          <a href="#" className="footer__nav-link">
            Контакты
          </a>
        </div>
        <div className="footer__list">
          <a href="#" className="footer__nav-link">
            Наши преподаватели
          </a>
          <a href="#" className="footer__nav-link">
            О нашей школе
          </a>
          <a href="#" className="footer__nav-link">
            Помощь
          </a>
        </div>
        <div className="footer__list">
          <span className="footer__requisit">ОГРНИП 321530000006562</span>
          <span className="footer__requisit">ИНН 532113692990</span>
          <span className="footer__requisit">© ИП Журина О.А., 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
