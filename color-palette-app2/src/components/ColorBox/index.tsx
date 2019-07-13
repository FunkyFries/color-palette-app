import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import chroma from "chroma-js";
import {
  StyledBox,
  CopyOverlay,
  CopyOverlayMessage,
  H1,
  P,
  BoxContent,
  CopyButton,
  MoreButton
} from "./style";

type Props = {
  background: string;
  name: string;
  id: string;
  navigate?: any;
  showButton: boolean;
  style?: any;
};

type State = {
  active: boolean;
};

class ColorBox extends Component<Props, State> {
  state: State = {
    active: false
  };

  changeCopyState = () => {
    this.setState({ active: true }, () => {
      setTimeout(() => this.setState({ active: false }), 1500);
    });
  };

  handleMoreClick = (e: any) => {
    e.stopPropagation();
    this.props.navigate(this.props.id);
  };

  render() {
    const { background, name, showButton } = this.props;
    const { active } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <StyledBox background={background} isDarkColor={isDarkColor}>
          <CopyOverlay background={background} active={active} />
          <CopyOverlayMessage active={active}>
            <H1>Copied!</H1>
            <P>{background}</P>
          </CopyOverlayMessage>
          <div>
            <BoxContent>
              <span>{name}</span>
            </BoxContent>

            <CopyButton>Copy</CopyButton>
          </div>
          {showButton && (
            <MoreButton onClick={this.handleMoreClick}>More</MoreButton>
          )}
        </StyledBox>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
