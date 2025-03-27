import React from 'react';
import './Modal.css';
import { observer } from "mobx-react";
import { userStore } from '../../api/userStore';
import { Link, useNavigate } from "react-router-dom";


const Modal = observer(({ isOpen, onClose, title, content }) => {
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userStore.login(navigate);
  };

  if (!isOpen) return null;
  console.log("ope");
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
              <h1>Вход</h1>
              <h3>Введите ваш логин и пароль</h3>
              <form onSubmit={handleSubmit}>
                <label for="username"> Логин: </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Логин"
                  value={userStore.username}
                  onChange={(e) => userStore.setUsername(e.target.value)}
                  required
                />
                <label for="password"> Пароль: </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Пароль"
                  value={userStore.password}
                  onChange={(e) => userStore.setPassword(e.target.value)}
                  required
                />
                <div class="wrap">
                  
                  <button type="submit">Войти</button>
                  
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
});

export default Modal;
