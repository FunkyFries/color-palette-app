import styled from "styled-components";

export const Div = styled("div").attrs<{
  background: string;
  isDarkColor: boolean;
}>(props => ({
  style: {
    background: props.background,
    color: props.isDarkColor ? "white" : "black"
  }
}))<{ background: string; isDarkColor: boolean }>`
  width: 20%;
  height: 25%;
  margin: 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  svg {
    transition: all 0.2s ease-in-out;
  }
  svg:hover {
    transform: scale(1.5);
  }
`;

export const BoxContent = styled("div")`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
`;
