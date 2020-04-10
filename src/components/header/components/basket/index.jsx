import React from "react";
import "./styles/style.scss";

const Basket = ({ quantity }) => {
  return (
    <div className="cart">
      <div className="cart__img"></div>
      <div className="cart__status">
        <div className="cart__status-item">Корзина:</div>
        {quantity === 0 ? (
          <div className="cart__status-item">пока пуста</div>
        ) : (
          <div className="cart__status-item">{quantity}</div>
        )}
      </div>
    </div>
  );
};
export default Basket;
