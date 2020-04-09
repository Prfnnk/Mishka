import React from "react";
import "./styles/style.scss";
const Menu = () => {
  return (
    <menu className="menu">
      <div className="menu__item">
        <a href="/" className="menu__link">
          Каталог товаров
        </a>
      </div>
      <div className="menu__item">
        <a href="/" className="menu__link">
          Вязание на заказ
        </a>
      </div>
    </menu>
  );
};

export default Menu;
