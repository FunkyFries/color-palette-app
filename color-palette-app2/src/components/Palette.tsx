import React, { Component } from "react";
import styled from "styled-components";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PaletteDiv = styled("div")`
  height: 100vh;
`;
const ColorBoxes = styled("div")`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
`;

const SliderStyles = styled("div")`
  width: 340px;
  margin: 0 10px;
  display: inline-block;
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
    level: 500
  };

  handleChange = (level: number) => {
    this.setState({ level });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color: any) => (
      <ColorBox key={color.name} background={color.hex} name={color.name} />
    ));
    return (
      <PaletteDiv>
        <SliderStyles>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.handleChange}
            trackStyle={{ backgroundColor: "transparent" }}
            railStyle={{ height: "8px" }}
            handleStyle={{
              backgroundColor: "green",
              outline: "none",
              border: "2px solid green",
              boxShadow: "none",
              marginTop: "-3px"
            }}
          />
        </SliderStyles>
        <ColorBoxes>{colorBoxes}</ColorBoxes>
      </PaletteDiv>
    );
  }
}

export default Palette;
