import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import MishkaPage from "./pages/mishka";
import { SIR } from "./pages/goroskopchik";
import MainPage from "./pages/main";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Route exact path={"/"} component={MainPage} />
          <Route path={"/mishka"} component={MishkaPage} />
          <Route exact path={"/corona"} component={SIR} />
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
