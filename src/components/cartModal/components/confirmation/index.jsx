import React from "react";
import "./styles/style.scss";

const Confirmation = ({ name, surname, fullAddress }) => {
  return (
    <div className="modal__wrapper">
      <div className="confirm">
        <div className="confirm__text">
          Спасибо за покупку, {name} {surname}!
        </div>
        <div className="confirm__text">
          Мы доставим ваш заказ по адресу: ул. {fullAddress.street}, дом{" "}
          {fullAddress.house}, квартира {fullAddress.apt}
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
