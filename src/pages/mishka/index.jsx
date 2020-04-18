import React, { useState } from "react";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Special from "../../components/special";
import About from "../../components/about";
import Feedback from "../../components/feedback";
import Contacts from "../../components/contacts";
import Footer from "../../components/footer";

import CartModal from "../../components/cartModal";

const MishkaPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="App">
      <div className="wrapper">
        <Header quantity={quantity} setOpenCart={setOpenCart}></Header>
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
      </div>
    </div>
  );
};

export default MishkaPage;
