import React from "react";
import style from "./Basket.module.css"; // Импорт CSS-модуля
import { Link } from "react-router-dom";


export const Basket =()=> {
  return (
    <main>
  <div className={style.container}>
    <section className={style.breadcrumb_section}>
      <div className={style.breadcrumb}>
        <a target="_blank" href="/">ГЛАВНАЯ</a>
        <a target="_blank" href="/services">Услуги</a>
        <a target="_blank" className={style.active} href="/basket">Корзина</a>
      </div>
    </section>
    <section className={style.production}>
      <div className={style.production__box}>
        <div className={style.production__box_left}>
          <h1>Ваша корзина</h1>
          <p>
            Здесь будут хранится услуги которые вы заказали 
          </p>
        </div>
      </div>
    </section>

    <section className={style.services_cards}>
      <div className={style.services_cards__box}>
        <div className={style.services_cards__box_elem} id="arenda" >
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Аренда ямобура</p>
          </h3>
          <p>
            Мы предлагаем в аренду автобуры, бурильно-крановые машины в
            Казани и по Татарстану
          </p>
          <img src="/seervisec 1.png" alt="" />
          <a href="">Удалить</a>
        </div>
        <div className={style.services_cards__box_elem} id="burenie" >
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Бурение под ограждения</p>
          </h3>
          <p>
            Наша организация оказывает услуги по бурению на глубину отверстий на глубину до 15 метров и ширину до 1 метра под заборы и ограждения.
          </p>
          <img src="/services1.jpg" alt="" />
          <a href="">Удалить</a>
        </div>
        <div className={style.services_cards__box_elem} id="burenie" >
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Бурение колодцев</p>
          </h3>
          <p>
            Услуги бурения колодцев на воду, глубина бурения до 12 метров, диаметр до 0.87 метра. Рытьё колодцев осуществляется механическим способом.
          </p>
          <img src="/services2.jpg" alt="" />
          <a href="">Удалить</a>
        </div>
      </div>
    </section>
    
    
  </div>
</main>

  );
};