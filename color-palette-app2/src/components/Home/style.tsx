import styled from "styled-components";
import { sizes } from "../constants";
import bg from "./bg.svg";

export const StyledHome = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  // background by SVGBackgrounds.com
  background-color: #394bad;
  background-image: url(${bg});
`;

export const Container = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 0.9rem;
  ${sizes.down("lg")} {
    width: 80%;
  }
`;

export const Nav = styled("nav")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  > a {
    color: white;
    padding-top: 10px;
  }
`;

export const Palettes = styled("div")<{ templateRows: number }>`
  grid-template-rows: repeat(${props => props.templateRows}, 1fr);
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 40px;

  ${sizes.down("md")} {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 35px;
  }
  ${sizes.down("xs")} {
    grid-template-columns: repeat(1, 100%);
    grid-gap: 30px;
  }
`;
