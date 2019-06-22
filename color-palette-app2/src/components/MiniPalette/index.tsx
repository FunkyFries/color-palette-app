import React from "react";
import { MiniBox, StyledMiniPalette, Colors, H5, Span } from "./style";

const MiniPalette = (props: any) => {
  const { paletteName, emoji, colors, id, handleClick } = props;
  const miniColorBoxes = colors.map((color: any) => (
    <MiniBox background={color.color} key={color.name} />
  ));

  const goToPalette = () => {
    handleClick(id);
  };

  return (
    <div>
      <StyledMiniPalette onClick={goToPalette}>
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
