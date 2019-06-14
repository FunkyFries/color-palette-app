import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "@reach/router";
import styled from "styled-components";

const StyledNavbar = styled("header")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;
`;

const Logo = styled(Link)`
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
`;

const SliderStyles = styled("div")`
  display: flex;
  align-items: center;
`;

type Props = {
  level: number;
  handleChange: any;
};

export default class Navbar extends Component<Props> {
  render() {
    const { level, handleChange } = this.props;
    return (
      <StyledNavbar>
        <Logo to="#">reactcolorpicker</Logo>
        <SliderStyles>
          <span>Level: {level}</span>
          <Slider
            style={{ width: "340px", margin: "0 10px" }}
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={handleChange}
            trackStyle={{ backgroundColor: "transparent" }}
            railStyle={{ height: "8px" }}
            handleStyle={{
              backgroundColor: "green",
              outline: "none",
              border: "2px solid green",
              boxShadow: "none",
              marginTop: "-3px"
            }}
          />
        </SliderStyles>
      </StyledNavbar>
    );
  }
}
