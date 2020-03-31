import React from "react";
import Menu from "./components/menu";
import Basket from "./components/basket";
import Search from "./components/search";
import "./stlyles/style.less";

const Header = () => {
  return (
    <header className="header">
      <Menu />
      <div>logotip4ik</div>
      <Search />
      <Basket />
    </header>
  );
};
export default Header;
