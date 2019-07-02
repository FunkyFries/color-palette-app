import styled from "styled-components";

export const StyledHome = styled("div")`
  background-color: blue;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
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
`;
