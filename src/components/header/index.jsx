import React from "react";
import Menu from "./components/menu";
import Basket from "./components/basket";
import Search from "./components/search";
import "./stlyles/style.scss";
import Logo from "./Img/mishka-logo-desktop.svg.png";

const Header = ({ quantity, setOpenCart }) => {
  return (
    <header className="header">
      <Menu />
      <div className="logo">
        <img src={Logo} alt="Логотип" />
      </div>
      <Search></Search>
      <Basket quantity={quantity} setOpenCart={setOpenCart} />
    </header>
  );
};
export default Header;
