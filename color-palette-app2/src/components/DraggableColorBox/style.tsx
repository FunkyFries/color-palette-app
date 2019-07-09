import styled from "styled-components";
import { sizes } from "../constants";

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
  ${sizes.down("lg")} {
    width: 25%;
    height: 20%;
  }
  ${sizes.down("md")} {
    width: 50%;
    height: 10%;
  }
  ${sizes.down("sm")} {
    width: 100%;
    height: 5%;
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
  ${sizes.down("sm")} {
    padding: 0 10px;
  }
`;
