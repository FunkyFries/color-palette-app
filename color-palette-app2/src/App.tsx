import React, { Component } from "react";
import { Router, Redirect, Location } from "@reach/router";
import seedPalettes from "./components/Helpers/seedPalettes";
import Home from "./components/Home/index";
import { NewPalette } from "./components/NewPalette/index";
import Palette from "./components/Palette/index";
import SingleColorPalette from "./components/SingleColorPalette/index";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
        <Location>
          {({ location }) => (
            <TransitionGroup className="transition-group">
              <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <Router location={location} className="router">
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
                </Router>
              </CSSTransition>
            </TransitionGroup>
          )}
        </Location>
      </div>
    );
  }
}

export default App;
