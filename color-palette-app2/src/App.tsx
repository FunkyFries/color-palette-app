import React, { Component } from "react";
import { Redirect } from "@reach/router";
import seedPalettes from "./components/Helpers/seedPalettes";
import Home from "./components/Home";
import { NewPalette } from "./components/NewPalette";
import Palette from "./components/Palette";
import SingleColorPalette from "./components/SingleColorPalette/index";
import PosedRouter from "./components/PosedRouter";

const savedPalettes = localStorage.getItem("palettes");

class App extends Component {
  state = {
    palettes: savedPalettes !== null ? JSON.parse(savedPalettes) : seedPalettes
  };
  savePalette = (newPalette: any) => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };
  deletePalette = (id: any) => {
    this.setState(
      (st: any) => ({
        palettes: st.palettes.filter((palette: any) => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  };
  syncLocalStorage = () => {
    localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  };
  render() {
    return (
      <div className="App">
        <PosedRouter>
          <Home
            path="/"
            palettes={this.state.palettes}
            deletePalette={this.deletePalette}
          />
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
        </PosedRouter>
      </div>
    );
  }
}

export default App;
