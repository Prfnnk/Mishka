import React from "react";
import "./styles/style.scss";
import BannerHeader from "./components/banner-header";
import BannerFooter from "./components/banner-footer";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner">
        <BannerHeader></BannerHeader>
        <div className="banner__title">Милые штуки ручной работы для дома</div>
        <BannerFooter></BannerFooter>
      </div>
      <div className="banner__img"></div>
    </div>
  );
};
export default Banner;
