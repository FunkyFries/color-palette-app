import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Home from "./components/Home";
import Palette from "./components/Palette";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <Palette path="/palette/:id" />
          <Redirect default noThrow from="*" to="/" />
        </Router>
      </div>
    );
  }
}

export default App;
