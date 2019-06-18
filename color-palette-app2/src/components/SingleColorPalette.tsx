import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
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

const Footer = styled("footer")`
  background-color: white;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
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
  palette = generatePalette(this.findPalette(this.props.paletteId));
  shades = this.gatherShades(this.palette, this.props.colorId);
  render() {
    console.log(this.shades);
    const colorBoxes = this.shades.map((color: any) => (
      <ColorBox
        background={color.hex}
        name={color.name}
        id={color.name}
        key={color.name}
        showButton={false}
      />
    ));
    console.log(colorBoxes);
    return (
      <PaletteDiv>
        <ColorBoxes>{colorBoxes}</ColorBoxes>
        <Footer>
          {this.props.paletteName}
          <span style={{ fontSize: "1.5rem", margin: "0 1rem" }}>
            {this.props.emoji}
          </span>
        </Footer>
      </PaletteDiv>
    );
  }
}
