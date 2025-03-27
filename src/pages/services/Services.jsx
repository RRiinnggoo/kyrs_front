import React, { useEffect, useState } from "react";
import style from "./Services.module.css";
import { Link } from "react-router-dom";

export const Services = ({ isAdmin = false }) => {
  // Общие состояния для обоих типов пользователей
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);

  // Состояния только для админа
  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    imageUrl: "",
    serviceType: "",
  });
  const [editingCard, setEditingCard] = useState(null);

  // Загрузка карточек
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cards");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  // Функции для админа
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingCard
        ? `http://localhost:8080/api/cards/${editingCard.id}`
        : "http://localhost:8080/api/cards";
      const method = editingCard ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCard),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (editingCard) {
        setCards(cards.map(card => card.id === editingCard.id ? data : card));
      } else {
        setCards([...cards, data]);
      }
      resetForm();
    } catch (error) {
      console.error("Error saving card:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/cards/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      setCards(cards.filter(card => card.id !== id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleEdit = (card) => {
    setNewCard({
      title: card.title,
      description: card.description,
      imageUrl: card.imageUrl,
      serviceType: card.serviceType,
    });
    setEditingCard(card);
    setShowForm(true);
  };

  const resetForm = () => {
    setNewCard({ title: "", description: "", imageUrl: "", serviceType: "" });
    setShowForm(false);
    setEditingCard(null);
  };

  // Пагинация
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <div className={style.container}>
        {/* Хлебные крошки */}
        <section className={style.breadcrumb_section}>
          <div className={style.breadcrumb}>
            <Link to="/">Главная</Link>
            <a className={style.active}>Услуги</a>
          </div>
        </section>

        {/* Заголовок */}
        <section className={style.production}>
          <div className={style.production__box}>
            <div className={style.production__box_left}>
              <h1>{isAdmin ? "Управление услугами" : "Наши услуги"}</h1>
              <p>
                {isAdmin
                  ? "Добавляйте, редактируйте и удаляйте услуги"
                  : "Мы предлагаем широкий спектр услуг по бурению и не только"}
              </p>
            </div>
            {isAdmin && (
              <div className={style.production__box_right}>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className={style.adminButton}
                >
                  {showForm ? "Отменить" : "Добавить услугу"}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Форма добавления/редактирования (только для админа) */}
        {isAdmin && showForm && (
          <form onSubmit={handleSubmit} className={style.cardForm}>
            <input
              type="text"
              name="title"
              placeholder="Название"
              value={newCard.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Описание"
              value={newCard.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Ссылка на изображение"
              value={newCard.imageUrl}
              onChange={handleInputChange}
              required
            />
            <select
              name="serviceType"
              value={newCard.serviceType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Выберите тип услуги
              </option>
              <option value="arenda">Аренда</option>
              <option value="burenie">Бурение</option>
              <option value="install">Установка</option>
            </select>
            <button className={style.AdminAdd} type="submit">Добавить</button>
          </form>
        )}

        {/* Список услуг */}
        <section className={style.services_cards}>
          <div className={style.services_cards__box}>
            {currentCards.map((card) => (
              <div key={card.id} className={style.services_cards__box_elem}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <img src={card.imageUrl} alt={card.title} />




                {isAdmin ? (
                  <div className={style.adminControls}>
                    <button
                      onClick={() => handleEdit(card)}
                      className={style.AdminEdit}
                    >
                      Редактировать
                    </button>
                    <button
                      onClick={() => handleDelete(card.id)}
                      className={style.AdminDelete}
                    >
                      Удалить
                    </button>
                  </div>
                ) : (
                  <a href="">Заказать</a>
                )}
              </div>
            ))}
          </div>
          </section>



        {/* Пагинация */}
        {cards.length > cardsPerPage && (
          <section className={style.paginationSection}>
            <div className={style.pagination}>
              {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={currentPage === i + 1 ? style.activePage : ""}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};