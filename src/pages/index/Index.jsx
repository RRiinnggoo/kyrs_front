import React from 'react';
import { Link } from 'react-router-dom';
import style from './Index.module.css'; // Assuming you have a CSS module file

export const Index = ()=> {
  return (
    <main className={style.index}>
    <div className={style.container} id="main">
      <section className={style.breadcrumb_section}>
        <div className={style.breadcrumb}>
          <Link to="/" className={style.active}>ГЛАВНАЯ</Link>
          <Link to="#" className={style.none}></Link>
        </div>
      </section>
      <section className={style.banner}>
        <div className={style.banner_left}>
          <h1>
            БУРЕНИЕ <img src="/premium.png" alt="premium" /><br />
            СКВАЖИН НА ВОДУ
          </h1>
          <p>
            Чистая вода – это наша миссия. <br />
            Наша компания специализируется на бурении скважин на воду для
            частных домов, дач и предприятий. Используем современное
            оборудование и опытные бригады. Гарантируем высокое качество работ
            и чистую, вкусную воду в вашем доме.
          </p>
          <div className={style.banner__left__buttons}>
            <Link to="/services">
              <span data-attr="Смотреть">Смотреть</span>
              <span data-attr="Каталог"></span>
            </Link>
            <img src="/sale.png" alt="sale" />
          </div>
        </div>
        <div className={style.banner_right}>
          <img src="/bannerimg.png" alt="bannerimg" />
        </div>
      </section>
      <section className={style.why_us}>
        <div className={style.why_us__box}>
          <h2>
            4 Причины, <br />
            почему стоит выбрать нас:
          </h2>
          <div className={style.why_us__blocks}>
            <div className={style.why_us__blocks_elem}>
              <h3>
                <img src="/why_us.png" alt="why_us" />
                <p>Качественная работа</p>
              </h3>
              <p>
                Наши специалисты имеют многолетний опыт в бурении скважин и
                используют только современные технологии.
              </p>
              <div className={style.why_us__blocks_elem_imgs}>
                <img src="/why_us_img.png" alt="why_us" />
                <img src="/why_us_img2.png" alt="why_us" />
              </div>
            </div>
            <div className={style.why_us__blocks_elem}>
              <h3>
                <img src="/why_us.png" alt="why_us" />
                <p>Опыт и профессионализм</p>
              </h3>
              <p>
                За счет мощного оборудования и ответственного персонала, мы
                выполняем всю работу быстро и качественно!
              </p>
              <div className={style.why_us__blocks_elem_imgs}>
                <img src="/why_us_img.png" alt="why_us" />
                <img src="/why_us_img2.png" alt="why_us" />
              </div>
            </div>
            <div className={style.why_us__blocks_elem}>
              <h3>
                <img src="/why_us.png" alt="why_us" />
                <p>Качество и гарантия:</p>
              </h3>
              <p>
                Мы даем гарантию на все виды работ, так как уверены в качестве
                используемых материалов и профессионализме.
              </p>
              <div className={style.why_us__blocks_elem_imgs}>
                <img src="/why_us_img.png" alt="why_us" />
                <img src="/why_us_img2.png" alt="www" />
              </div>
            </div>
            <div className={style.why_us__blocks_elem}>
              <h3>
                <img src="/why_us.png" alt="why_us" />
                <p>Индивидуальный подход:</p>
              </h3>
              <p>
                Мы учитываем ваши потребности и предлагаем оптимальное и
                разумное решение для каждого объекта.
              </p>
              <div className={style.why_us__blocks_elem_imgs}>
                <img src="/why_us_img.png" alt="why_us" />
                <img src="/why_us_img2.png" alt="why_us" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.doc_sliders}>
        <div className={style.doc_sliders__box}>
          <div className={style.doc_slider__box__left_elem}>
            <h2>
              2 года ГАРАНТИИ на все <br />
              работы
            </h2>
            <p>
              Мы не подвели ни одного покупателя, потому что каждая работа
              проходит тщательную проверку по нашему авторскому чек-листу
              обученными специалистами в отделе контроля качества и все
              оборудование сертифицировано.
            </p>
            <div className={style.banner__left__buttons}>
              <Link to="/services">
                <span data-attr="Перейти">Перейти</span>
              </Link>
            </div>
          </div>
          <div className={style.doc_slider__box__right_elem} style={{ display: 'flex', gap: '20px' }}>
            <div className={style.slider}>
              <img className={style.photo} src="/doc4.png" alt="" />
              <img className={style.photo} src="/doc3.png" alt="" />
              <img className={style.photo} src="/doc2.png" alt="" />
              <img className={style.photo} src="/doc1.png" alt="" />
            </div>
            <div className={style.slider}>
              <img className={style.photo} src="/doc1.png" alt="" />
              <img className={style.photo} src="/doc2.png" alt="" />
              <img className={style.photo} src="/doc3.png" alt="" />
              <img className={style.photo} src="/doc4.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.founder}>
        <div className={style.founder__box}>
          <div className={style.founder__box__left_elem}>
            <h2>
              Бурение скважин нового<br />
              поколения
            </h2>
            <p>
              <img src="founder_text_img.png" alt="founder" />
              Наша компания более 11 лет занимается бурением скважин на воду.
              За все время мы пробурили более 1 500 скважин для более чем
              1 000 клиентов. <br /><br />
              Сотни собранных отзывов и колоссальный накопленный опыт
              позволили нам создать оборудование, превосходящее все аналоги в
              индустрии. Мы с гордостью представляем вам бурение нового
              поколения “БурМастер”.
            </p>
            <div>
              <div className={style.bottom_elem}>
                <h3>11 лет</h3>
                <p>на рынке</p>
              </div>
              <div className={style.bottom_elem}>
                <h3>&gt; 2 000</h3>
                <p>клиентов</p>
              </div>
              <div className={style.bottom_elem}>
                <h3>&gt; 15 000</h3>
                <p>скважин пробурено</p>
              </div>
            </div>
          </div>
          <div className={style.founder__box__right_elem}>
            <img src="/founder.png" alt="founder" />
          </div>
        </div>
      </section>
      <section className={style.feedback}>
        <div className={style.feedback__box}>
          <div className={style.feedback__box__left}>
            <img src="/feedback.png" alt="feedback" />
          </div>
          <div className={style.feedback__box__right}>
            <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
            <p>
              Оставьте заявку или напишите нам на WhatsApp, чтобы задать их
              лично нам и получить бесплатную консультацию!
            </p>
            <div className={style.feedback__box__right__buttons}>
              <div className={style.banner__left__buttons}>
                <Link to="/contacts">
                  <span data-attr="Задать">Задать</span>
                  <span data-attr="Вопрос">Вопрос</span>
                </Link>
                <Link target="_blank" to="https://web.whatsapp.com/">
                  <span data-attr="Написать в">Написать в</span>
                  <span data-attr="WhatsApp">WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={style.services}></div>
    <div className={style.contacts}></div>
    <div className={style.admin}></div>
    <div className={style.profile}></div>
  </main>
  );
}

