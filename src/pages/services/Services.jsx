import React from "react";
import style from "./Services.module.css"; // Импорт CSS-модуля
import { Link } from "react-router-dom";


export const Services =()=> {
  return (
    <main>
  <div className={style.container}>
    <section className={style.breadcrumb_section}>
      <div className={style.breadcrumb}>
        <Link target="_blank" href="index.html">ГЛАВНАЯ</Link>
        <a className={style.active} href="#">Услуги</a>
      </div>
    </section>
    <section className={style.production}>
      <div className={style.production__box}>
        <div className={style.production__box_left}>
          <h1>Наше производство</h1>
          <p>
            Наше производство находится в Альметьевске. Офисы в Казани. Мы
            бурим скважины на воду.
          </p>
        </div>
        <div className={style.production__box_right}>
          <h2>Выберите тип услуги:</h2>
          <select className={style.type_service}>
            <option selected disabled value="">Выбрать</option>
            <option value="arenda">Аренда</option>
            <option value="burenie">Бурение</option>
            <option value="install">Установка</option>
          </select>
          <a className={style.btn_filter}>
            Поиск
          </a>
        </div>
      </div>
    </section>
    <section className={style.services_cards}>
      <div className={style.services_cards__box}>
        <div className={style.services_cards__box_elem} id="arenda" style={{ display: 'block' }}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Аренда ямобура</p>
          </h3>
          <p>
            Мы предлагаем в аренду автобуры, бурильно-крановые машины в
            Казани и по Татарстану
          </p>
          <img src="/seervisec 1.png" alt="" />
          <a href="">Заказать</a>
        </div>
        <div className={style.services_cards__box_elem} id="burenie" style={{ display: 'block' }}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Бурение под ограждения</p>
          </h3>
          <p>
            Наша организация оказывает услуги по бурению на глубину отверстий на глубину до 15 метров и ширину до 1 метра под заборы и ограждения.
          </p>
          <img src="/services1.jpg" alt="" />
          <a href="">Заказать</a>
        </div>
        <div className={style.services_cards__box_elem} id="burenie" style={{ display: 'block' }}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Бурение колодцев</p>
          </h3>
          <p>
            Услуги бурения колодцев на воду, глубина бурения до 12 метров, диаметр до 0.87 метра. Рытьё колодцев осуществляется механическим способом.
          </p>
          <img src="/services2.jpg" alt="" />
          <a href="">Заказать</a>
        </div>
        <div className={style.services_cards__box_elem} id="install" style={{ display: 'block' }}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Установка столбов</p>
          </h3>
          <p>
            Мы занимаемся установкой опор ЛЭП для освещения, так и для ворот, или других целей
          </p>
          <img src="/services3.jpg" alt="" />
          <a href="">Заказать</a>
        </div>
        <div className={style.services_cards__box_elem} id="install" style={{ display: 'block' }}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Установка опор</p>
          </h3>
          <p>
            
            Установка опор для освещения(ЛЭП) и для других целей производится бурильно-крановыми машинами или ямобурами.
          </p>
          <img src="/services4.jpg" alt="" />
          <a href="">Заказать</a>
        </div>
        <div className={style.services_cards__box_elem} id="burenie" style={{ display: 'block' }}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Столбчатый фундамент</p>
          </h3>
          <p>
            Бурение под столбчатый фундамент. Под столбы бурим ямы или шурфы соответствующей глубины
          </p>
          <img src="/services5.jpg" alt="" />
          <a href="">Заказать</a>
        </div>
        <div className={style.services_cards__box_elem} id="burenie" style={{ display: 'block' }}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Бурение под опоры ЛЭП</p>
          </h3>
          <p>
            Мы оказываем услуги бурения под столбы опор ЛЭП, выполняем установку столбов бурильно-крановой машиной. Бурим с помощью ямобура в Казани.
          </p>
          <img src="/services7.jpg" alt="" />
          <a href="">Заказать</a>
        </div>
      </div>
    </section>
  </div>
</main>
  );
};