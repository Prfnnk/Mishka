import React from "react";
import "./styles/style.scss";
import Flower from "./img/icon-1.png";
import Cash from "./img/icon-3.png";
import Heart from "./img/icon-5.png";
import Ball from "./img/icon-2.png";
import Rocket from "./img/icon-4.png";
import Box from "./img/icon-6.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
        <div className="about__title">Коротко о нас:</div>
        <div className="about__list">
          <div className="about__block">
            <div className="about__item">
              <div className="about__item-pic">
                <img src={Flower} alt="цветок" />
              </div>
              <div className="about__item-text">
                Экологически <br /> чистые материалы
              </div>
            </div>
            <div className="about__item">
              <div className="about__item-pic">
                <img src={Cash} alt="банкнота" />
              </div>
              <div className="about__item-text">
                Скандинавский стиль <br /> по российской цене
              </div>
            </div>
            <div className="about__item">
              <div className="about__item-pic">
                <img src={Heart} alt="сердце" />
              </div>
              <div className="about__item-text">
                Увеличивает лайки <br /> на фотографиях
              </div>
            </div>
          </div>
          <div className="about__block">
            <div className="about__item">
              <div className="about__item-pic">
                <img src={Ball} alt="клубок" />
              </div>
              <div className="about__item-text">
                Связано вручную с <br /> любовью и умилением
              </div>
            </div>
            <div className="about__item">
              <div className="about__item-pic">
                <img src={Rocket} alt="ракета" />
              </div>
              <div className="about__item-text">
                Поддержка отечественного <br /> производителя
              </div>
            </div>
            <div className="about__item">
              <div className="about__item-pic">
                <img src={Box} alt="подарок" />
              </div>
              <div className="about__item-text">
                Поставляется в <br /> подарочной упаковке
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
