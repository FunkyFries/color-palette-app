import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RouteComponentProps } from "@reach/router";
import { generatePalette } from "./colorHelpers";
import styled from "styled-components";
import seedPalettes from "./seedPalettes";

const PaletteDiv = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ColorBoxes = styled("div")`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  paletteName?: string;
  paletteId?: string;
  colorId?: string;
  emoji?: string;
  colors?: { [num: number]: Array<Object> };
};

export default class SingleColorPalette extends Component<
  RouteComponentProps & Props
> {
  state = {
    format: "hex"
  };

  findPalette = (id: any) => {
    return seedPalettes.find(function(palette) {
      return palette.id === id;
    });
  };
  gatherShades = (palette: any, colorId: any) => {
    let shades: any = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color: any) => color.id === colorId)
      );
    }
    return shades.slice(1);
  };
  changeFormat = (val: string) => {
    this.setState({ format: val });
  };
  palette = generatePalette(this.findPalette(this.props.paletteId));
  shades = this.gatherShades(this.palette, this.props.colorId);

  render() {
    const { paletteName, emoji } = this.palette;
    const colorBoxes = this.shades.map((color: any) => (
      <ColorBox
        background={color[this.state.format]}
        name={color.name}
        id={color.name}
        key={color.name}
        showButton={false}
      />
    ));
    return (
      <PaletteDiv>
        <Navbar changeFormat={this.changeFormat} showingAllColors={false} />
        <ColorBoxes>{colorBoxes}</ColorBoxes>
        <Footer paletteName={paletteName} emoji={emoji} />
      </PaletteDiv>
    );
  }
}
