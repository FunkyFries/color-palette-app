import React from "react";
import { MiniBox, StyledMiniPalette, Colors, H5, Span, Delete } from "./style";

const MiniPalette = (props: any) => {
  const { paletteName, emoji, colors, id, handleClick, deletePalette } = props;
  const miniColorBoxes = colors.map((color: any) => (
    <MiniBox background={color.color} key={color.name} />
  ));

  const goToPalette = () => {
    handleClick(id);
  };

  function handleDelete(e: any) {
    e.stopPropagation();
    deletePalette(id);
  }

  return (
    <div>
      <StyledMiniPalette onClick={goToPalette}>
        <Delete onClick={handleDelete} />
        <Colors>{miniColorBoxes}</Colors>
        <H5>
          {paletteName}
          <Span>{emoji}</Span>
        </H5>
      </StyledMiniPalette>
    </div>
  );
};

export default MiniPalette;
