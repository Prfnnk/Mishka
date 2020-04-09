import React from "react";
import "./styles/style.scss";

const BannerFooter = () => {
  return (
    <div className="banner__footer">
      <div className="banner__footer-items">
        <div className="banner__footer-item banner__footer-item_left">
          <div className="banner__footer-name">
            Предметы <br /> интерьера
          </div>
          <div className="banner__footer-pic banner__footer-pic_left"></div>
        </div>
        <div className="banner__footer-item banner__footer-item_right">
          <div className="banner__footer-name">
            Детские <br /> игрушки
          </div>
          <div className="banner__footer-pic banner__footer-pic_right"></div>
        </div>
      </div>
    </div>
  );
};
export default BannerFooter;
