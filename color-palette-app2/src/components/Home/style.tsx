import styled from "styled-components";

export const StyledHome = styled("div")`
  background-color: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Container = styled("div")`
  width: 50%;
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

export const Palettes = styled("div")`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;
