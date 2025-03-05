import React from "react";
import style from "./Profile.module.css"; // Импорт CSS-модуля
import { Link } from "react-router-dom";


export const Profile = () => {
    return (
        <main>
            <div className={style.container}>
                <section className={style.breadcrumb_section}>
                    <div className={style.breadcrumb}>
                        <a target="_blank" href="index.html">ГЛАВНАЯ</a>
                        <a className={style.active} href="#">Услуги</a>
                    </div>
                </section>

                <section className={style.profilePhoto}>
                    <a href=""
                    ><img src="/profilPhoto.png" alt="profilePhoto"
                        /></a>
                    <a href="#">
                        <p>Риналь</p>
                        <img src="/pen.png" alt="pen" />
                    </a>
                    <a href="#">
                        <p>+7 917 854-80-91</p>
                        <img src="/pen.png" alt="pen" />
                    </a>
                    <a href="#">
                        <p>latypovrenal680@gmail.com</p>
                        <img src="/pen.png" alt="pen" />
                    </a>
                </section>

                <section className={style.applications}>
                    <div className={style.applications__box}>
                        <h2>Активные вопросы</h2>
                        <div className={style.applications__box__elem}>
                            <p>Риналь</p>
                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>
                            <a href="#">Удалить</a>
                            <a href="#">Редактировать</a>
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
                            <a href="#">Редактировать</a>
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
                            <a href="#">Редактировать</a>
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
                            <a href="#">Редактировать</a>
                        </div>
                    </div>
                </section>

                <section className={style.applications}>
                    <div className={style.applications__box}>
                        <h2>Завершенные вопросы</h2>
                        <div className={style.applications__box__elem}>
                            <p>Риналь</p>
                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>

                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>
                            <p>Админ</p>
                        </div>
                        <div className={style.applications__box__elem}>
                            <p>Риналь</p>
                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>

                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>
                            <p>Админ</p>
                        </div>
                        <div className={style.applications__box__elem}>
                            <p>Риналь</p>
                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>

                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>
                            <p>Админ</p>
                        </div>
                        <div className={style.applications__box__elem}>
                            <p>Риналь</p>
                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>

                            <div>
                                <p>
                                    Не забудьте сохранить изменения, после редактирования!Не
                                    забудьте сохранить изменения...
                                </p>
                            </div>
                            <p>Админ</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>



    );
};