import React from "react";
import "../../styles/style.scss";
import { wordEnds } from "../../../../utils/wordEnds";

const Cart = ({ quantity, setQuantity, setDetails }) => {
  const price = 990;
  return (
    <div className="modal__wrapper">
      <div className="modal__header">
        <div className="modal__header-item">В корзине</div>
        <div className="modal__header-item">{quantity}</div>
        <div className="modal__header-goods">
          товар{wordEnds(quantity, ["", "а", "ов"])}
        </div>
      </div>
      <div className="modal__list">
        <div className="modal__product">
          <div className="modal__list-item">Товар</div>
          <div className="modal__list-item">Цена, руб.</div>
          <div className="modal__list-item">Кол-во</div>
          <div className="modal__list-item">Итого</div>
        </div>
        <div className="modal__product">
          <div className="modal__list-item">Вязаные корзинки</div>
          <div className="modal__list-item">{price} руб.</div>
          <div className="modal__list-item modal__list-item_quantity">
            <button
              className="modal__list-number"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 0}
            >
              -
            </button>
            <div className="">{quantity}</div>
            <button
              className="modal__list-number"
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity === 15}
            >
              +
            </button>
          </div>
          <div className="modal__list-item">{price * quantity} руб.</div>
        </div>
      </div>
      {quantity === 15 ? (
        <div className="modal__warning">
          К сожалению, единовременно доступно к заказу не более 15 штук одного
          изделия. Для изготовления большего количества изделий обратитесь к
          менеджеру по телефону{" "}
          <a href="tel:+79671807915"> +7(912) 345-67-80</a>
        </div>
      ) : null}

      <div className="modal__total">
        <div className="modal__total-text">Сумма к оплате:</div>
        <div className="modal__total-sum">{price * quantity} руб.</div>
      </div>
      <div className="modal__footer">
        <button className="button" onClick={() => setDetails("details")}>
          Перейти к деталям
        </button>
      </div>
    </div>
  );
};
export default Cart;
