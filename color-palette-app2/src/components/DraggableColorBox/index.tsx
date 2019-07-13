import React from "react";
import chroma from "chroma-js";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import { Div, BoxContent } from "./style";

const DraggableColorBox: React.FC<{
  color: string;
  name: string;
  handleClick: any;
}> = ({ color, name, handleClick }) => {
  const isDarkColor = chroma(color).luminance() <= 0.08;

  function removeColor() {
    handleClick(name);
  }
  return (
    <Div background={color} isDarkColor={isDarkColor}>
      <BoxContent>
        <span>{name}</span>
        <DeleteIcon onClick={removeColor} />
      </BoxContent>
    </Div>
  );
};

export default SortableElement(DraggableColorBox);
