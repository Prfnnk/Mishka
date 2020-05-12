import React from "react";
import "./styles/style.scss";
import Poster from "./img/video-desktop.png";
import Play from "./img/play.png";
import Rabbit from "./img/pic-1.png";
import SmallBasket from "./img/pic-2.png";
import BigBasket from "./img/pic-3.png";
import Napkin from "./img/napkin_cut.jpg";
import Carpet from "./img/carpet_cut.jpg";

const goodsArr = [
  {
    id: 1,
    img: Rabbit,
    title: "Зайчик-попрыгайчик",
    description: "Рост 30 см, вес 200 г",
    price: "1 200",
  },
  {
    id: 2,
    img: SmallBasket,
    title: "Корзинка для белья",
    description: "Диаметр 15 см, высота 10 см",
    price: "690",
  },
  {
    id: 3,
    img: BigBasket,
    title: "Большая корзинка для игрушек",
    description: "Диаметр 30 см, высота 30 см",
    price: "1 500",
  },
  {
    id: 4,
    img: Napkin,
    title: "Декоративная салфетка",
    description: "Минимальный размер 50х50см",
    price: "от 590",
  },
  {
    id: 5,
    img: Carpet,
    title: "Большой ковер напольный",
    description: "Ширина 60 см, длина 120 см",
    price: "1 700",
  },
];
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
          {goodsArr.map((item) => {
            return (
              <div key={item.id} className="catalog__range-item">
                <div className="catalog__range-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="range__text range__text_last">
                  <div className="range__title">{item.title}</div>
                  <div className="range__description">{item.description}</div>
                </div>
                <div className="range__price range__price_last">
                  {item.price} руб.
                </div>
              </div>
            );
          })}
        </div>
        <div className="catalog__video-block">
          <div className="catalog__video">
            <div className="catalog__video-link">
              <video
                src="https://www.youtube.com/watch?v=loOWKm8GW6A"
                controls
                poster={Poster}
              ></video>
              <div className="catalog__video-play">
                <img src={Play} alt="запуск видео" />
              </div>
            </div>
            <div className="catalog__details">
              <div className="catalog__details-logo"></div>
              <div className="catalog__details-title">Процесс производства</div>
              <div className="catalog__details-description">
                По просьбам наших любимых фолловеров мы сняли для вас подробное
                видео о том, как появляются наши товары.
              </div>
              <div className="catalog__details-button">
                <div className="button">СДЕЛАТЬ ЗАКАЗ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catalog;
