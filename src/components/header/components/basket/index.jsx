import React from "react";
import cn from "classnames";
import "./styles/style.scss";
import { wordEnds } from "../../../../utils/wordEnds";

const Basket = ({ quantity, setOpenCart, show }) => {
  const openCart = () => {
    if (quantity !== 0) {
      setOpenCart(true);
    }
  };
  return (
    <div
      className={cn("cart", { cart_disabled: quantity === 0, cart_show: show })}
      onClick={() => openCart()}
    >
      <div className="cart__img"></div>
      <div className="cart__status">
        <div className="cart__status-item">Корзина:</div>
        {quantity === 0 ? (
          <div className="cart__status-item">пока пуста</div>
        ) : (
          <div className="cart__status-item">
            {quantity} товар{wordEnds(quantity, ["", "а", "ов"])}
          </div>
        )}
      </div>
    </div>
  );
};
export default Basket;
