import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileMenu from "../../components/mobile-menu";
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path={"/mishka/"} component={MainMishka} />
        <Route exact path={"/mishka/form/"} component={Form} />
        <Route exact path={"/mishka/catalog/"} component={Catalog} />
      </Switch>

      {/* <Catalog></Catalog> */}
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
