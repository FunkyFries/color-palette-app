import React from "react";
import { Div } from "./style";

const DraggableColorBox: React.FC<{ color: string; name: string }> = props => {
  return <Div background={props.color}>{props.name}</Div>;
};

export default DraggableColorBox;
