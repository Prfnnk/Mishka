import React from "react";
import "./styles/style.scss";

const Catalog = () => {
  return (
    <div className="catalog-wrapper">
      <div className="catalog">
        <div className="form__header">
          <div className="form__header-wrapper">
            <div className="form__links">
              <div className="banner__menu">
                <div className="banner__menu-item">Новые поступления</div>
                <div className="banner__menu-item">Распродажа</div>
              </div>
              <div className="banner__menu banner__menu_tablet">
                <div className="banner__menu-item">Каталог товаров</div>
                <div className="banner__menu-item">Вязание на заказ</div>
              </div>
              <div className="banner__delivery">
                Бесплатная доставка по России
              </div>
            </div>
            <div className="form__title">Каталог товаров</div>
          </div>
          <div className="form__header-img"></div>
        </div>
        <div className="catalog__range">
          <div className="catalog__range-item">
            <div className="catalog__range-img catalog__range-img_rabbit"></div>
            <div className="range__text">
              <div className="range__title">Зайчик-попрыгайчик</div>
              <div className="range__description">Рост 30 см, вес 200 г</div>
            </div>
            <div className="range__price">1 200 руб.</div>
          </div>
          <div className="catalog__range-item">
            <div className="catalog__range-img catalog__range-img_small"></div>
            <div className="range__text">
              <div className="range__title">Корзинка для белья</div>
              <div className="range__description">
                Диаметр 15 см, высота 10 см
              </div>
            </div>
            <div className="range__price">690 руб.</div>
          </div>
          <div className="catalog__range-item">
            <div className="catalog__range-img catalog__range-img_big"></div>
            <div className="range__text range__text_last">
              <div className="range__title">Большая корзинка для игрушек</div>
              <div className="range__description">
                Диаметр 30 см, высота 30 см
              </div>
            </div>
            <div className="range__price range__price_last">1 500 руб.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catalog;
