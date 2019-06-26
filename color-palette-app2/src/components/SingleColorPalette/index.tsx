import React, { Component } from "react";
import ColorBox from "../ColorBox";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { RouteComponentProps } from "@reach/router";
import { generatePalette } from "../Helpers/colorHelpers";
import { PaletteDiv, ColorBoxes, GoBackLink, StyledBox } from "./style";

type Props = {
  paletteName?: string;
  paletteId?: string;
  colorId?: string;
  emoji?: string;
  colors?: { [num: number]: Array<Object> };
  palettes?: any;
};

export default class SingleColorPalette extends Component<
  RouteComponentProps & Props
> {
  state = {
    format: "hex"
  };

  findPalette = (id: any) => {
    return this.props.palettes.find(function(palette: any) {
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
