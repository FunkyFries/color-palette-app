import styled from "styled-components";
import { Link } from "@reach/router";
import { sizes } from "../constants";

export const StyledNavbar = styled("header")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;
`;

export const Logo = styled(Link)`
  margin-right: 15px;
  padding: 0 13px;
  font-size: 22px;
  background-color: #eceff1;
  font-family: Roboto;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  transition: all 0.4s ease-in-out;
  :hover {
    background-color: #e9e9e9;
  }
  ${sizes.down("xs")} {
    display: none;
  }
`;

export const SliderStyles = styled("div")`
  display: flex;
  align-items: center;
  ${sizes.down("md")} {
    width: 50%;
  }
`;
