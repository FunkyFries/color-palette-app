import React from "react";
import styled from "styled-components/macro";

const StyledMiniPalette = styled("div")`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
`;

const Colors = styled("div")`
  background-color: #dae1e4;
  height: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  overflow: hidden;
`;

const H5 = styled("h5")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
`;

const Span = styled("span")`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

const MiniBox = styled("div").attrs<{ background: string }>(props => ({
  style: {
    background: props.background
  }
}))<{ background: string }>`
  width: 20%;
  height: 25%;
  margin: 0;
  display: flex;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
`;

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
