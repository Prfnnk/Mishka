import React from "react";
import Banner from "../../../components/banner";
import Special from "../../../components/special";
import About from "../../../components/about";
import Feedback from "../../../components/feedback";
import Contacts from "../../../components/contacts";

const MainMishka = ({ quantity, setQuantity }) => {
  return (
    <>
      <Banner></Banner>
      <Special quantity={quantity} setQuantity={setQuantity}></Special>
      <About></About>
      <Feedback></Feedback>
      <Contacts></Contacts>
    </>
  );
};
export default MainMishka;
