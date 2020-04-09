import React from "react";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Special from "./components/special";
import About from "./components/about";
import Feedback from "./components/feedback";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Banner></Banner>
        <Special></Special>
        <About></About>
        <Feedback></Feedback>
        <Contacts></Contacts>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
