import React, { useState } from "react";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Special from "../../components/special";
import About from "../../components/about";
import Feedback from "../../components/feedback";
import Contacts from "../../components/contacts";
import Footer from "../../components/footer";
import MobileMenu from "../../components/mobile-menu";

import CartModal from "../../components/cartModal";

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

      <Banner></Banner>
      <Special quantity={quantity} setQuantity={setQuantity}></Special>
      <About></About>
      <Feedback></Feedback>
      <Contacts></Contacts>
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
