import React from "react";
import "./styles/style.scss";

const Special = ({ quantity, setQuantity }) => {
  return (
    <div className="special">
      <div className="special__header">
        <div className="special__sign">
          ТОВАР <br /> НЕДЕЛИ
        </div>
        <div className="special__title">Вязаные корзинки</div>
      </div>
      <div className="special__wrapper">
        <div className="special__info">
          Экологически чистая пряжа, ручная работа. Доступны в шести расцветках,
          и трех размерах.
        </div>
        <div className="special__list">
          <div className="special__item">
            <div className="special__item-name">Цвет:</div>
            <div className="special__item-discription">«Тиффани»/серый</div>
          </div>
          <div className="special__item">
            <div className="special__item-name">Диаметр:</div>
            <div className="special__item-discription">25 см</div>
          </div>
          <div className="special__item">
            <div className="special__item-name">Высота:</div>
            <div className="special__item-discription">15 см</div>
          </div>
        </div>
        <div className="special__price">Цена: 990 руб.</div>
        {quantity < 1 ? (
          <button className="button" onClick={() => setQuantity(quantity + 1)}>
            ЗАКАЗАТЬ
          </button>
        ) : (
          <div className="special__order">
            <button
              className="special__order-item"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button>
            <div className="special__order-number">{quantity}</div>
            <button
              className="special__order-item"
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity === 15}
            >
              +
            </button>
          </div>
        )}
      </div>
      {quantity === 15 ? (
        <div className="special__warning">
          К сожалению, единовременно доступно к заказу не более 15 штук одного
          изделия. Для изготовления большего количества изделий обратитесь к
          менеджеру по телефону{" "}
          <a href="tel:+79671807915"> +7(912) 345-67-80</a>
        </div>
      ) : null}
    </div>
  );
};
export default Special;
