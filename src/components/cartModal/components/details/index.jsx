import React, { useState } from "react";
import "./styles/style.scss";

const Details = ({ quantity, setDetails, setFullInfo }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [apt, setApt] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const price = 990;

  const isValid = () => {
    return !(name && surname && street && house && apt && (email || tel));
  };

  const onSubmit = () => {
    setDetails("confirm");
    setFullInfo({
      name,
      surname,
      street,
      house,
      apt,
    });
  };
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
              <input
                type="text"
                placeholder="mishka@mishka.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="details__item">
            <div className="details__name">Телефон:</div>
            <div className="details__data">
              <input
                type="text"
                placeholder="+7"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
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
            <button
              className="button"
              disabled={isValid()}
              onClick={() => onSubmit()}
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
