import React from "react";
import "./styles/style.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <menu className="menu">
      <div className="menu__item">
        <Link to="/mishka/catalog/" className="menu__link">
          Каталог товаров
        </Link>
      </div>
      <div className="menu__item">
        <Link to="/mishka/form/" className="menu__link">
          Вязание на заказ
        </Link>
      </div>
    </menu>
  );
};

export default Menu;
