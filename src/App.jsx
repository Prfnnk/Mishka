import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Special from "./components/special";
import About from "./components/about";
import Feedback from "./components/feedback";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

const App = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="App">
      <div className="wrapper">
        <Header quantity={quantity}></Header>
        <Banner></Banner>
        <Special quantity={quantity} setQuantity={setQuantity}></Special>
        <About></About>
        <Feedback></Feedback>
        <Contacts></Contacts>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
