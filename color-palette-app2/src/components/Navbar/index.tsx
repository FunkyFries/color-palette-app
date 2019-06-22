import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { StyledNavbar, Logo, SliderStyles } from "./style";

type Props = {
  level?: number;
  changeLevel?: any;
  showingAllColors: boolean;
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
    const { level, changeLevel, showingAllColors } = this.props;
    const { format } = this.state;
    return (
      <StyledNavbar>
        <Logo to="/">reactcolorpicker</Logo>
        {showingAllColors && (
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
        )}
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
