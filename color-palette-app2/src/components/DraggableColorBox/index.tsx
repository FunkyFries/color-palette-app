import React from "react";
import chroma from "chroma-js";
import { Div, BoxContent } from "./style";
import DeleteIcon from "@material-ui/icons/Delete";

const DraggableColorBox: React.FC<{ color: string; name: string }> = props => {
  const isDarkColor = chroma(props.color).luminance() <= 0.08;
  return (
    <Div background={props.color} isDarkColor={isDarkColor}>
      <BoxContent>
        <span>{props.name}</span>
        <DeleteIcon />
      </BoxContent>
    </Div>
  );
};

export default DraggableColorBox;
