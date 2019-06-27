import React from "react";
import chroma from "chroma-js";
import { Div, BoxContent } from "./style";
import DeleteIcon from "@material-ui/icons/Delete";

const DraggableColorBox: React.FC<{
  color: string;
  name: string;
  handleClick: any;
}> = props => {
  const isDarkColor = chroma(props.color).luminance() <= 0.08;

  function removeColor() {
    props.handleClick(props.name);
  }
  return (
    <Div background={props.color} isDarkColor={isDarkColor}>
      <BoxContent>
        <span>{props.name}</span>
        <DeleteIcon onClick={removeColor} />
      </BoxContent>
    </Div>
  );
};

export default DraggableColorBox;
