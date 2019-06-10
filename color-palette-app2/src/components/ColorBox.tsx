import React from "react";
import styled from "styled-components";

const StyledBox = styled("div")<{ background: string }>`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background: ${props => props.background};
`;

type Props = {
  background: string;
  name: string;
};

const ColorBox: React.FC<Props> = props => {
  return (
    <StyledBox background={props.background}>
      <span>{props.name}</span>
      <span>MORE</span>
    </StyledBox>
  );
};

export default ColorBox;
