import React from "react";
import style from "./Footer.module.css"; // Импорт CSS-модуля
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__box}>
          <div className={style.footer__box__left}>
            <img src="/logo1.png" alt="logo" />
          </div>
          <div className={style.footer__box__right}>
            <div className={style.footer__box__right__flexbox}>
              <div className={style.footer__box__right__flexbox_elem}>
                <h3>Навигация по странице:</h3>
                <Link to="/">Главное</Link>
                <Link to="#advantages">Преимущества</Link>
                <Link to="#results">Результаты</Link>
                <Link to="#feedback">Обратная связь</Link>
              </div>
              <div className={style.footer__box__right__flexbox_elem}>
                <h3>Навигация по сайту:</h3>
                <Link to="/">Главная</Link>
                <Link to="/services">Услуги</Link>
                <Link to="/cart">Корзина</Link>
                <Link to="/profile">Профиль</Link>
                <Link to="/admin">Панель управления</Link>
              </div>
              <div className={style.footer__box__right__flexbox_elem}>
                <h3>Контакты</h3>
                <Link to="/contacts">8 (800) 700 05-58</Link>
                <div>
                  <Link target="_blank" href="https://www.youtube.com/" rel="noopener noreferrer">
                    <img src="/youtube.png" alt="youtube" />
                  </Link>
                  <Link target="_blank" href="https://instagram.com" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="instagram" />
                  </Link>
                  <Link target="_blank" href="https://vk.com/" rel="noopener noreferrer">
                    <img src="/vk.png" alt="vk" />
                  </Link>
                </div>
                <div className={style.banner__left__buttons}>
                  <Link to="/contacts">
                    <span data-attr="Связаться с нами">Связаться с нами</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottom_footer}>© Латыпов Риналь Ильдарович</div>
    </footer>
  );
};