import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import seedPalettes from "./components/Helpers/seedPalettes";
import Home from "./components/Home/index";
import { NewPalette } from "./components/NewPalette/index";
import Palette from "./components/Palette/index";
import SingleColorPalette from "./components/SingleColorPalette/index";

class App extends Component {
  state = {
    palettes: seedPalettes
  };
  savePalette = (newPalette: any) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" palettes={this.state.palettes} />
          <NewPalette
            path="/palette/new"
            savePalette={this.savePalette}
            palettes={this.state.palettes}
          />
          <Palette path="/palette/:id" palettes={this.state.palettes} />
          <SingleColorPalette
            path="/palette/:paletteId/:colorId"
            palettes={this.state.palettes}
          />
          <Redirect default noThrow from="*" to="/" />
        </Router>
      </div>
    );
  }
}

export default App;
