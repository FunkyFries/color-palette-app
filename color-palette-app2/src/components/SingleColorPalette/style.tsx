import styled from "styled-components";
import { Link } from "@reach/router";

export const PaletteDiv = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ColorBoxes = styled("div")`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
`;

export const GoBackLink = styled(Link)`
  padding: 0.3rem 1.5rem;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  color: white;
  border: none;
  text-transform: inherit;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

export const StyledBox = styled("div").attrs<{ background: any }>(props => ({
  style: {
    background: props.background
  }
}))<{ background: string }>`
  width: 20%;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
`;
