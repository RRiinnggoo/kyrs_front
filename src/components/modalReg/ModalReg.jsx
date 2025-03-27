import React from 'react';
import './Register.css';
import { observer } from "mobx-react";
import { userStore } from '../../api/userStore';
import { Link, useNavigate } from "react-router-dom";


const ModalReg = observer(({ isOpen, onClose, title, content }) => {
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userStore.register(navigate); // Передаем navigate в userStore.register
  };

  if (!isOpen) return null;
  // console.log("ope");
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">

          <span className="modal-close" onClick={onClose}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}
            <div class="registr">
              <h1>Регистрация</h1>
              {/* <h3>Введите ваш логин и пароль</h3> */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Логин"
                  value={userStore.username}
                  onChange={(e) => userStore.setUsername(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={userStore.email}
                  onChange={(e) => userStore.setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  value={userStore.password}
                  onChange={(e) => userStore.setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Повторите пароль"
                  value={userStore.confirmPassword}
                  onChange={(e) => userStore.setConfirmPassword(e.target.value)}
                  required
                />
                {userStore.error && <p style={{ color: "red" }}>{userStore.error}</p>}
                <div class="wrap">
                  <button type="submit">Зарегистрироваться</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
});

export default ModalReg;
