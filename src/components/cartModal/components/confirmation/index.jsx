import React from "react";
import "./styles/style.scss";

const Confirmation = ({ fullInfo }) => {
  const { name, surname, street, house, apt } = fullInfo;
  return (
    <div className="modal__wrapper">
      <div className="confirm">
        <div className="confirm__text">
          Спасибо за покупку, {name} {surname}!
        </div>
        <div className="confirm__text">
          Мы доставим ваш заказ по адресу: ул. {street}, дом {house}, квартира{" "}
          {apt}
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
