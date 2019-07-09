import styled from "styled-components";
import { sizes } from "../constants";
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

export const StyledBox = styled("div")`
  width: 20%;
  margin: 0;
  background: black;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  text-transform: uppercase;

  ${sizes.down("lg")} {
    width: 25%;
  }

  ${sizes.down("md")} {
    width: 50%;
  }

  ${sizes.down("xs")} {
    width: 100%;
  }
`;
