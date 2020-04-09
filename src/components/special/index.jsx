import React from "react";
import "./styles/style.scss";

const Special = () => {
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
        <button className="special__button">ЗАКАЗАТЬ</button>
      </div>
    </div>
  );
};
export default Special;
