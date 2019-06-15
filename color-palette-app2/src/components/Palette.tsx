import React, { Component } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import ColorBox from "./ColorBox";

const PaletteDiv = styled("div")`
  height: 100vh;
`;
const ColorBoxes = styled("div")`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
`;

interface Palette {
  paletteName: string;
  id: string;
  emoji: string;
  colors: { [num: number]: Array<Object> };
}

type Props = {
  palette: Palette;
};

class Palette extends Component<Props> {
  state = {
    level: 500,
    format: "hex"
  };

  handleChange = (level: number) => {
    this.setState({ level });
  };
  changeFormat = (val: string) => {
    this.setState({ format: val });
  };

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color: any) => (
      <ColorBox key={color.name} background={color[format]} name={color.name} />
    ));
    return (
      <PaletteDiv>
        <Navbar
          level={level}
          handleChange={this.handleChange}
          changeFormat={this.changeFormat}
        />
        <ColorBoxes>{colorBoxes}</ColorBoxes>
      </PaletteDiv>
    );
  }
}

export default Palette;
