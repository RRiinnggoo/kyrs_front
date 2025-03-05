import React from "react";
import style from "./Panel.module.css"; // Импорт CSS-модуля
import { Link } from "react-router-dom";


export const Panel =()=> {
  return (
    <main className={style.admin}>
  <div className={style.container}>
    <section className={style.breadcrumb_section}>
      <div className={style.breadcrumb}>
        <a target="_blank" href="index.html">ГЛАВНАЯ</a>
      </div>
    </section>
    <section className={style.production}>
      <div className={style.production__box}>
        <div className={style.production__box_left}>
          <h1>Панель администратора</h1>
          <p>
            Не забудьте сохранить изменения, <br />
            после редактирования!
          </p>
        </div>
        <div className={style.production__box_right}>
          <a href="">Сохранить</a><br />
          <a href="">Добавить</a>
        </div>
      </div>
    </section>
    <section className={style.services_cards}>
      <div className={style.services_cards__box}>
        <div className={style.services_cards__box_elem}>
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
          <a href="">Редактировать</a>
        </div>
        <div className={style.services_cards__box_elem}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Бурение под ограждения</p>
          </h3>
          <p>
            Наша организация оказывает услуги по бурению на глубину отверстий на глубину до 15 метров и ширину до 1 метра под заборы и ограждения.
          </p>
          <img src="/services1.jpg" alt="" />
          <a href="">Удалить</a>
          <a href="">Редактировать</a>
        </div>
        <div className={style.services_cards__box_elem}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Бурение колодцев</p>
          </h3>
          <p>
            Услуги бурения колодцев на воду, глубина бурения до 12 метров, диаметр до 0.87 метра. Рытьё колодцев осуществляется механическим способом.
          </p>
          <img src="/services2.jpg" alt="" />
          <a href="">Удалить</a>
          <a href="">Редактировать</a>
        </div>
        <div className={style.services_cards__box_elem}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Установка столбов</p>
          </h3>
          <p>
            Мы занимаемся установкой опор ЛЭП для освещения, так и для ворот, или других целей
          </p>
          <img src="/services3.jpg" alt="" />
          <a href="">Удалить</a>
          <a href="">Редактировать</a>
        </div>
        <div className={style.services_cards__box_elem}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Установка опор</p>
          </h3>
          <p>
            
            Установка опор для освещения(ЛЭП) и для других целей производится бурильно-крановыми машинами или ямобурами.
          </p>
          <img src="/services4.jpg" alt="" />
          <a href="">Удалить</a>
          <a href="">Редактировать</a>
        </div>
        <div className={style.services_cards__box_elem}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Столбчатый фундамент</p>
          </h3>
          <p>
            Бурение под столбчатый фундамент. Под столбы бурим ямы или шурфы соответствующей глубины
          </p>
          <img src="/services5.jpg" alt="" />
          <a href="">Удалить</a>
          <a href="">Редактировать</a>
        </div>
        <div className={style.services_cards__box_elem}>
          <h3>
            <img src="/why_us.png" alt="why_us" />
            <p>Бурение под опоры ЛЭП</p>
          </h3>
          <p>
            Мы оказываем услуги бурения под столбы опор ЛЭП, выполняем установку столбов бурильно-крановой машиной. Бурим с помощью ямобура в Казани.
          </p>
          <img src="/services7.jpg" alt="" />
          <a href="">Удалить</a>
          <a href="">Редактировать</a>
        </div>
      </div>
    </section>
    <section className={style.applications}>
      <div className={style.applications__box}>
        <h2>Заявки гостей</h2>
        <div className={style.applications__box__elem}>
          <p>Риналь</p>
          <div>
            <p>
              Не забудьте сохранить изменения, после редактирования!Не
              забудьте сохранить изменения...
            </p>
          </div>
          <a href="#">Удалить</a>
          <a className={style.active_applic} href="#">Прочитано</a>
          <a href="#">Редактировать</a>
          <a href="#">Ответить</a>
        </div>
        <div className={style.applications__box__elem}>
          <p>Риналь</p>
          <div>
            <p>
              Не забудьте сохранить изменения, после редактирования!Не
              забудьте сохранить изменения...
            </p>
          </div>
          <a href="#">Удалить</a>
          <a className="" href="#">Прочитано</a>
          <a href="#">Редактировать</a>
          <a href="#">Ответить</a>
        </div>
        <div className={style.applications__box__elem}>
          <p>Риналь</p>
          <div>
            <p>
              Не забудьте сохранить изменения, после редактирования!Не
              забудьте сохранить изменения...
            </p>
          </div>
          <a href="#">Удалить</a>
          <a className={style.active_applic} href="#">Прочитано</a>
          <a href="#">Редактировать</a>
          <a href="#">Ответить</a>
        </div>
        <div className={style.applications__box__elem}>
          <p>Риналь</p>
          <div>
            <p>
              Не забудьте сохранить изменения, после редактирования!Не
              забудьте сохранить изменения...
            </p>
          </div>
          <a href="#">Удалить</a>
          <a className="" href="#">Прочитано</a>
          <a href="#">Редактировать</a>
          <a href="#">Ответить</a>
        </div>
        <div className={style.applications__box__elem}>
          <p>Риналь</p>
          <div>
            <p>
              Не забудьте сохранить изменения, после редактирования!Не
              забудьте сохранить изменения...
            </p>
          </div>
          <a href="#">Удалить</a>
          <a className="" href="#">Прочитано</a>
          <a href="#">Редактировать</a>
          <a href="#">Ответить</a>
        </div>
      </div>
    </section>
  </div>
</main>


  );
};