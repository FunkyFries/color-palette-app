import React from "react";
import { navigate } from "@reach/router";
import { MiniBox, StyledMiniPalette, Colors, H5, Span, Delete } from "./style";

const MiniPalette = React.memo((props: any) => {
  const { paletteName, emoji, colors, id, openDialog } = props;
  const miniColorBoxes = colors.map((color: any) => (
    <MiniBox background={color.color} key={color.name} />
  ));

  function handleClick() {
    navigate(`palette/${id}`);
  }

  function handleDelete(e: any) {
    e.stopPropagation();
    openDialog(id);
  }

  return (
    <StyledMiniPalette onClick={handleClick}>
      <Delete onClick={handleDelete} />
      <Colors>{miniColorBoxes}</Colors>
      <H5>
        {paletteName}
        <Span>{emoji}</Span>
      </H5>
    </StyledMiniPalette>
  );
});

export default MiniPalette;
