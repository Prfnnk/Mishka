import React from "react";
import "./styles/style.scss";

const BannerHeader = () => {
  return (
    <header className="banner__header">
      <div className="banner__menu">
        <div className="banner__menu-item">Новые поступления</div>
        <div className="banner__menu-item">Распродажа</div>
      </div>
      <div className="banner__menu banner__menu_tablet">
        <div className="banner__menu-item">Каталог товаров</div>
        <div className="banner__menu-item">Вязание на заказ</div>
      </div>
      <div className="banner__delivery">Бесплатная доставка</div>
    </header>
  );
};
export default BannerHeader;
