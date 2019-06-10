import React, { Component } from "react";
import styled from "styled-components";
import ColorBox from "./ColorBox";

const PaletteDiv = styled("div")`
  height: 100vh;
`;
const ColorBoxes = styled("div")`
  height: 90%;
`;

type Props = {
  colors: Array<{ name: string; color: string }>;
};

class Palette extends Component<Props> {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox key={color.name} background={color.color} name={color.name} />
    ));
    return (
      <PaletteDiv>
        <ColorBoxes>{colorBoxes}</ColorBoxes>
      </PaletteDiv>
    );
  }
}

export default Palette;
