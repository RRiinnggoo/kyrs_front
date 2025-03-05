import React, { useState, useEffect } from "react";
import style from "./Header.module.css"; // Импорт CSS-модуля
import { Link } from "react-router-dom";

export const Header = ({ isAuthenticated, onLogout }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('styleMode') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkstyle');
      localStorage.setItem('styleMode', 'dark');
    } else {
      document.body.classList.remove('darkstyle');
      localStorage.setItem('styleMode', null);
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={`${style.header_menu} ${style.flex}`}>
          <div className={style.header__menu__left}>
            <Link to="/">
              <img src="./logo.png" alt="logo" />
              <p>
                Бурение <br />
                скважин на воду
              </p>
            </Link>
          </div>
          <div className={style.header__menu__center}>
            <nav>
              <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/basket">Корзина</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
                <li><Link to="/panel">Панель управления</Link></li>
                <li><Link to="/profile">Профиль</Link></li>
              </ul>
            </nav>

            <div className={style.menu}>
              <input type="checkbox" id="burger-checkbox" className={style.burger_checkbox} />
              <label htmlFor="burger-checkbox" className={style.burger}></label>
              <ul className={style.menu_list}>
                <li><Link to="/" className={style.menu_item}>Главная</Link></li>
                <li><Link to="/services" className={style.menu_item}>Услуги</Link></li>
                <li><Link to="/contacts" className={style.menu_item}>Контакты</Link></li>
                <li><Link to="/admin" className={style.menu_item}>Админ</Link></li>
                <li><Link to="/profile" className={style.menu_item}>Профиль</Link></li>
              </ul>
            </div>
          </div>
          <div className={style.header__menu__right}>
            <div className={style.button_container_1}>
              <span className={style.mas}>Вход</span>
              <button type="button" name="Hover" onClick={onLogout}>
                {isAuthenticated ? "Выход" : "Вход"}
              </button>
            </div>
            <Link to="#" onClick={toggleDarkMode}>
              <img className={style.check_mode} src="/sun.png" alt="sun" />
            </Link>
            <Link to="#" onClick={toggleDarkMode}>
              <img className={style.check_mod} src="/moon-solid.svg" alt="moon" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};