import React, { useState } from "react";
import Modal from "../modal";

import "./styles/style.scss";
import Cart from "./components/cart";
import Details from "./components/details";
import Confirmation from "./components/confirmation";

const CartModal = ({ quantity, setQuantity, setOpenCart }) => {
  const [details, setDetails] = useState("cart");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [apt, setApt] = useState("");

  const fullAddress = {
    street,
    house,
    apt,
  };
  console.log(fullAddress);
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
            street={street}
            setStreet={setStreet}
            house={house}
            setHouse={setHouse}
            apt={apt}
            setApt={setApt}
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            setDetails={setDetails}
            quantity={quantity}
          ></Details>
        );
      default:
        return (
          <Confirmation
            fullAddress={fullAddress}
            name={name}
            surname={surname}
          ></Confirmation>
        );
    }
  };
  return <Modal onClose={setOpenCart}>{renderModal()}</Modal>;
};
export default CartModal;
