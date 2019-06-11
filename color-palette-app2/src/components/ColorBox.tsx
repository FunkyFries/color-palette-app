import React from "react";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";

const StyledBox = styled("div")<{ background: string }>`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: flex;
  position: relative;
  cursor: pointer;
  background: ${props => props.background};
  text-transform: uppercase;
`;

const CopyContainer = styled("div")``;

const BoxContent = styled("div")`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 10px;
  color: black;
  font-size: 12px;
  letter-spacing: 1px;
`;

const CopyButton = styled("button")`
  width: 100px;
  height: 30px;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -15px;
  text-align: center;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  color: white;
  border: none;
  opacity: 0;
  text-transform: inherit;

  ${StyledBox}:hover & {
    opacity: 1;
    transition: 0.5s;
  }
`;

const MoreButton = styled("button")`
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  border: none;
  right: 0;
  bottom: 0;
  color: white;
  width: 60px;
  height: 30px;
  text-transform: inherit;
`;

type Props = {
  background: string;
  name: string;
};

const ColorBox: React.FC<Props> = props => {
  const { background, name } = props;
  return (
    <StyledBox background={background}>
      <CopyContainer>
        <BoxContent>
          <span>{name}</span>
        </BoxContent>
        <CopyToClipboard text={background}>
          <CopyButton>Copy</CopyButton>
        </CopyToClipboard>
      </CopyContainer>
      <MoreButton>More</MoreButton>
    </StyledBox>
  );
};

export default ColorBox;
