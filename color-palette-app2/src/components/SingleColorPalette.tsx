import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RouteComponentProps, Link } from "@reach/router";
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

const GoBackLink = styled(Link)`
  padding: 0.3rem 1.5rem;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  color: white;
  border: none;
  text-transform: inherit;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

const StyledBox = styled("div").attrs<{ background: any }>(props => ({
  style: {
    background: props.background
  }
}))<{ background: string }>`
  width: 20%;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
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
        <ColorBoxes>
          {colorBoxes}
          <StyledBox background="black">
            <GoBackLink to="../">Go Back</GoBackLink>
          </StyledBox>
        </ColorBoxes>
        <Footer paletteName={paletteName} emoji={emoji} />
      </PaletteDiv>
    );
  }
}
