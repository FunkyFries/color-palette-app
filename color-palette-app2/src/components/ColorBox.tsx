import React from "react";
import styled from "styled-components";

type Props = {
  background: string;
  name: string;
};

const ColorBox: React.FC<Props> = props => {
  return (
    <div style={{ background: props.background }}>
      <span>{props.name}</span>
      <span>MORE</span>
    </div>
  );
};

export default ColorBox;
