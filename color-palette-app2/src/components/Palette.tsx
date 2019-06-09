import React, { Component } from "react";
import ColorBox from "./ColorBox";

type Props = {
  colors: Array<{ name: string; color: string }>;
};

class Palette extends Component<Props> {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox key={color.name} background={color.color} name={color.name} />
    ));
    return (
      <div>
        <h1>Palette</h1>
        {colorBoxes}
      </div>
    );
  }
}

export default Palette;
