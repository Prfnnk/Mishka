import React from "react";
import "./styles/style.scss";
import Basket from "../header/components/basket";

const MobileMenu = ({ quantity, setOpenCart }) => {
  return (
    <div className="mobile">
      <div className="mobile-item">Каталог товаров</div>
      <div className="mobile-item">Вязание на заказ</div>
      <div className="mobile-item">
        <div className="mobile__img"></div>
        <div>Поиск по сайту</div>
      </div>
      <div className="mobile-item">
        <Basket
          quantity={quantity}
          setOpenCart={setOpenCart}
          show={true}
        ></Basket>
      </div>
    </div>
  );
};
export default MobileMenu;
