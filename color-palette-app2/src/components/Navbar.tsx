import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

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
  transition: all 0.4s ease-in-out;
  :hover {
    background-color: #e9e9e9;
  }
`;

const SliderStyles = styled("div")`
  display: flex;
  align-items: center;
`;

type Props = {
  level: number;
  changeLevel: any;
  changeFormat: any;
};

export default class Navbar extends Component<Props> {
  state = {
    format: "hex",
    open: false
  };

  changeFormat = (e: any) => {
    this.setState({ format: e.target.value, open: true }, () => {
      this.props.changeFormat(this.state.format);
    });
  };

  closeSnackbar = () => {
    this.setState({ open: false });
  };

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <StyledNavbar>
        <Logo to="/">reactcolorpicker</Logo>
        <SliderStyles>
          <span>Level: {level}</span>
          <Slider
            style={{ width: "340px", margin: "0 10px" }}
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
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
        <Select
          value={format}
          onChange={this.changeFormat}
          style={{
            marginLeft: "auto",
            marginRight: "1rem"
          }}
        >
          <MenuItem value="hex">Hex - #fffff</MenuItem>
          <MenuItem value="hsl">HSL - hsl(0, 0%, 100%)</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
        </Select>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}!
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </StyledNavbar>
    );
  }
}
