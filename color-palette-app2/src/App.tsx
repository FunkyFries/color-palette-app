import React, { Component } from "react";
import { Redirect } from "@reach/router";
import PosedRouter from "./components/PosedRouter";
import Home from "./components/Home";
import Palette from "./components/Palette";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPalette from "./components/NewPalette";
import seedPalettes from "./components/Helpers/seedPalettes";

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
    const { palettes } = this.state;
    return (
      <div className="App">
        <PosedRouter>
          <Home
            path="/"
            palettes={palettes}
            deletePalette={this.deletePalette}
          />
          <NewPalette
            path="/palette/new"
            savePalette={this.savePalette}
            palettes={palettes}
          />
          <Palette path="/palette/:id" palettes={palettes} />
          <SingleColorPalette
            path="/palette/:paletteId/:colorId"
            palettes={palettes}
          />
          <Redirect default noThrow from="*" to="/" />
        </PosedRouter>
      </div>
    );
  }
}

export default App;
