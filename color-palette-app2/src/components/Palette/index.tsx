import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ColorBox from "../ColorBox";
import { PaletteDiv, ColorBoxes } from "./style";
import { generatePalette } from "../Helpers/colorHelpers";

type Props = {
  paletteName?: string;
  id?: string;
  emoji?: string;
  colors?: { [num: number]: Array<Object> };
  palettes?: any;
};

class Palette extends Component<Props & RouteComponentProps> {
  state = {
    level: 500,
    format: "hex"
  };

  findPalette = (id: any) => {
    return this.props.palettes.find(function(palette: any) {
      return palette.id === id;
    });
  };

  changeLevel = (level: number) => {
    this.setState({ level });
  };
  changeFormat = (val: string) => {
    this.setState({ format: val });
  };

  palette = generatePalette(this.findPalette(this.props.id));

  render() {
    const { colors, paletteName, emoji } = this.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color: any) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        id={color.id}
        navigate={this.props.navigate}
        showButton
      />
    ));
    return (
      <PaletteDiv>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showingAllColors={true}
        />
        <ColorBoxes>{colorBoxes}</ColorBoxes>
        <Footer paletteName={paletteName} emoji={emoji} />
      </PaletteDiv>
    );
  }
}

export default Palette;
