import React, { useState } from "react";
import { observer } from "mobx-react";
import { userStore } from "../../api/userStore";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import Modal from './../modalLog/modal';
import ModalReg from '../modalReg/ModalReg';
import { useNavigate } from "react-router-dom";

export const Header = observer(() => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpenReg, setModalOpenReg] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    userStore.logout();
    navigate('/');
    window.location.reload();
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModalReg = () => {
    setModalOpenReg(true);
  };

  const handleCloseModalReg = () => {
    setModalOpenReg(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={style.header}>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Авторизация"
      />

      <ModalReg
        isOpen={isModalOpenReg}
        onClose={handleCloseModalReg}
        title="Регистрация"
      />
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
                <li><Link to="/UserServices">Услуги</Link></li>
                {userStore.isAuthenticated && userStore.role === "USER" &&<li><Link to="/basket">Корзина</Link></li>}
                <li><Link to="/contacts">Контакты</Link></li>
                {userStore.isAuthenticated && userStore.role === "ADMIN" && (
                <li><Link to="/admin/services">Панель управления</Link></li>
)}
                {userStore.isAuthenticated && userStore.role === "USER" && <li><Link to="/profile">Профиль</Link></li>}
              </ul>
            </nav>
          </div>

          <div className={style.header__menu__right}>
            {!userStore.isAuthenticated ? (
              <>
                <div className={style.button_container_1}>
                  <span className={style.mas}>Вход</span>
                  <button type="button" name="Hover" onClick={handleOpenModal}>
                    Вход
                  </button>
                </div>
                <div className={`${style.button_container_1} ${style.child}`}>
                  <span className={style.mas}>Регистрация</span>
                  <button type="button" name="Hover" onClick={handleOpenModalReg}>
                    Зарегистрироваться
                  </button>
                </div>
              </>
            ) : (
              <div className={style.button_container_1}>
                <span className={style.mas}>Выход</span>
                <button onClick={handleLogout} className={style.button}>Выйти</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});