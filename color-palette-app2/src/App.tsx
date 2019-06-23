import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import seedPalettes from "./components/Helpers/seedPalettes";
import Home from "./components/Home/index";
import { NewPalette } from "./components/NewPalette/index";
import Palette from "./components/Palette/index";
import SingleColorPalette from "./components/SingleColorPalette/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" palettes={seedPalettes} />
          <NewPalette path="/palette/new" />
          <Palette path="/palette/:id" />
          <SingleColorPalette path="/palette/:paletteId/:colorId" />
          <Redirect default noThrow from="*" to="/" />
        </Router>
      </div>
    );
  }
}

export default App;
