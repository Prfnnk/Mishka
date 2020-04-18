import React, { useState } from "react";
import Modal from "../modal";

import "./styles/style.scss";
import Cart from "./components/cart";
import Details from "./components/details";
import Confirmation from "./components/confirmation";

const CartModal = ({ quantity, setQuantity, setOpenCart }) => {
  const [details, setDetails] = useState("cart");
  const [fullInfo, setFullInfo] = useState({});

  const renderModal = () => {
    switch (details) {
      case "cart":
        return (
          <Cart
            setQuantity={setQuantity}
            setDetails={setDetails}
            quantity={quantity}
          ></Cart>
        );
      case "details":
        return (
          <Details
            setFullInfo={setFullInfo}
            setDetails={setDetails}
            quantity={quantity}
          ></Details>
        );
      default:
        return <Confirmation fullInfo={fullInfo}></Confirmation>;
    }
  };
  return <Modal onClose={setOpenCart}>{renderModal()}</Modal>;
};
export default CartModal;
