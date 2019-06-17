import React, { Component } from "react";
import Navbar from "./Navbar";
import styled from "styled-components/macro";
import ColorBox from "./ColorBox";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import { RouteComponentProps } from "@reach/router";

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
  id?: string;
  emoji?: string;
  colors?: { [num: number]: Array<Object> };
};

class Palette extends Component<Props & RouteComponentProps> {
  state = {
    level: 500,
    format: "hex"
  };

  findPalette = (id: any) => {
    return seedPalettes.find(function(palette) {
      return palette.id === id;
    });
  };

  changeLevel = (level: number) => {
    this.setState({ level });
  };
  changeFormat = (val: string) => {
    this.setState({ format: val });
  };
  render() {
    const palette = generatePalette(this.findPalette(this.props.id));
    const { colors, paletteName, emoji } = palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color: any) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        id={color.id}
        navigate={this.props.navigate}
      />
    ));
    return (
      <PaletteDiv>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <ColorBoxes>{colorBoxes}</ColorBoxes>
        <Footer>
          {paletteName}
          <span style={{ fontSize: "1.5rem", margin: "0 1rem" }}>{emoji}</span>
        </Footer>
      </PaletteDiv>
    );
  }
}

export default Palette;
