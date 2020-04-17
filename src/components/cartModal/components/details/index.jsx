import React from "react";
import "./styles/style.scss";

const Details = ({
  quantity,
  setDetails,
  name,
  setName,
  surname,
  setSurname,
  street,
  setStreet,
  house,
  setHouse,
  apt,
  setApt,
}) => {
  const price = 990;
  return (
    <div className="modal__wrapper">
      <div className="details__title">Информация о покупателе</div>
      <div className="details__buyer">
        <div className="details__list">
          <div className="details__item">
            <div className="details__name">Имя:</div>
            <div className="details__data">
              <input
                type="text"
                placeholder="Мишка"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="details__item">
            <div className="details__name">Фамилия:</div>
            <div className="details__data">
              <input
                type="text"
                placeholder="Мишкин"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
          </div>
          <div className="details__item">
            <div className="details__name">E-mail:</div>
            <div className="details__data">
              <input type="text" placeholder="mishka@mishka.com" />
            </div>
          </div>
          <div className="details__item">
            <div className="details__name">Телефон:</div>
            <div className="details__data">
              <input type="text" placeholder="+7" />
            </div>
          </div>
        </div>
      </div>
      <div className="details__title">Адрес доставки</div>
      <div className="details__address">
        <div className="details__list">
          <div className="details__item">
            <div className="details__name">Улица:</div>
            <div className="details__data">
              <input
                type="text"
                placeholder="ул.Мишкина"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div className="details__item">
            <div className="details__name">Дом:</div>
            <div className="details__data">
              <input
                type="text"
                placeholder="№"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </div>
          </div>
          <div className="details__item">
            <div className="details__name">Квартира:</div>
            <div className="details__data">
              <input
                type="text"
                placeholder="№"
                value={apt}
                onChange={(e) => setApt(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="details__footer">
        <div className="details__title">
          Итого к оплате: {price * quantity} руб.
        </div>
        <div className="details__buttons">
          <div className="details__order">
            <button className="button" onClick={() => setDetails("cart")}>
              Назад
            </button>
          </div>
          <div className="details__order">
            <button className="button" onClick={() => setDetails("confirm")}>
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
