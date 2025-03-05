import React from "react";
import style from "./Contacts.module.css"; // Импорт CSS-модуля
import { Link } from "react-router-dom";


export const Contacts =()=> {
  return (
    <main>
  <div className={style.container}>
    <section className={style.breadcrumb_section}>
      <div className={style.breadcrumb}>
        <a target="_blank" href="index.html">ГЛАВНАЯ</a>
        <a target="_blank" href="#">Услуги</a>
        <a target="_blank" className={style.active} href="#">Контакты</a>
      </div>
    </section>
    <section className={style.production}>
      <div className={style.production__box}>
        <div className={style.production__box_left}>
          <h1>Наши Контакты</h1>
          <p>
            Если у Вас возникли вопросы, свяжитесь 
            с нами любым удобным для Вас способом: 
          </p>
        </div>
      </div>
    </section>
    <section className={style.geolocation}>
      <div className={style.geolocation__box}>
        <div className={style.geolocation__box__left}>
          <h3>АДРЕС</h3>
          <p>Республика Татарстан,
            г. Альметьевск, ул Ленина, 95</p>
          <h3>ТЕЛЕФОН</h3>
          <p>8 (800) 700 05-58</p>
          <h3>ПОЧТА</h3>
          <p>burMaster@yandex.ru</p>
        </div>
        <div className={style.geolocation__box__right}>
          <iframe style={{ borderRadius: '50px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.3332688449523!2d52.27556287713644!3d54.89707255757497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41605dc3c529eeb9%3A0x91ebbd9afc41d9f!2z0YPQuy4g0JvQtdC90LjQvdCwLCA5NSwg0JDQu9GM0LzQtdGC0YzQtdCy0YHQuiwg0KDQtdGB0L8uINCi0LDRgtCw0YDRgdGC0LDQvSwgNDIzNDYx!5e0!3m2!1sru!2sru!4v1729073987584!5m2!1sru!2sru" width="981" height="697" className={style.carta} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    <section className={style.kontacts}>
      <div className={style.kontacts__box}>
        <div className={style.text}>
          Свяжитесь с нами
        </div>
        <form action="#">
          <div className={style.form_row}>
            <div className={style.input_data}>
              <input type="text" required />
              <div className={style.underline}></div>
              <label>Фамилия</label>
            </div>
            <div className={style.input_data}>
              <input type="text" required />
              <div className={style.underline}></div>
              <label>Имя</label>
            </div>
          </div>
          <div className={style.form_row}>
            <div className={style.input_data}>
              <input type="text" required />
              <div className={style.underline}></div>
              <label>Email</label>
            </div>
            <div className={style.input_data}>
              <input type="text" required />
              <div className={style.underline}></div>
              <label>Номер телефона</label>
            </div>
          </div>
          <div className={style.form_row}>
            <div className={style.input_data + ' ' + style.textarea}>
              <textarea rows="8" cols="80" required></textarea>
              <br />
              <div className={style.underline}></div>
              <label>Ваше сообщение</label>
              <br />
              <div className={style.form_row + ' ' + style.submit_btn}>
                <div className={style.input_data}>
                  <div className={style.inner}></div>
                  <input type="submit" value="Отправить" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</main>

  );
};