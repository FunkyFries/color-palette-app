import React from "react";
import styled from "styled-components";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "../DraggableColorBox";

const Div = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const DraggableColorList: React.FC<{ colors: any; removeColor: any }> = ({
  colors,
  removeColor
}) => {
  return (
    <Div>
      {colors.map((c: any, i: number) => (
        <DraggableColorBox
          color={c.color}
          index={i}
          name={c.name}
          key={c.name}
          handleClick={removeColor}
        />
      ))}
    </Div>
  );
};

export default SortableContainer(DraggableColorList);
