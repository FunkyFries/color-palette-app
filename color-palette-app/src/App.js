import React, { Component } from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedPalettes[4]} />
      </div>
    );
  }
}
