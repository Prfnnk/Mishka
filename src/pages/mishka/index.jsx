import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileMenu from "../../components/mobile-menu";
import { BrowserRouter, Route } from "react-router-dom";
import Form from "../../components/form";
import Catalog from "../../components/catalog";

import CartModal from "../../components/cartModal";
import MainMishka from "./main-page";

const MishkaPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Header
        quantity={quantity}
        setOpenCart={setOpenCart}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      ></Header>
      {openMenu ? (
        <MobileMenu quantity={quantity} setOpenCart={setOpenCart}></MobileMenu>
      ) : null}
      {/* <Route
        path={"/mishka"}
        component={
          <MainMishka
            quantity={quantity}
            setQuantity={setQuantity}
          ></MainMishka>
        }
      />
      <Route exact path={"/mishka/form/"} component={Form} /> */}
      <Catalog></Catalog>
      <Footer></Footer>
      {openCart ? (
        <CartModal
          quantity={quantity}
          setQuantity={setQuantity}
          setOpenCart={setOpenCart}
        ></CartModal>
      ) : null}
    </>
  );
};

export default MishkaPage;
