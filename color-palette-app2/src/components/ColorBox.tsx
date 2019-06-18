import React, { Component } from "react";
import styled from "styled-components/macro";
import CopyToClipboard from "react-copy-to-clipboard";

const StyledBox = styled("div").attrs<{ background: any }>(props => ({
  style: {
    background: props.background
  }
}))<{ background: string }>`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: flex;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
`;

const H1 = styled("h1")`
  font-weight: 400;
  text-shadow: 1px 2px black;
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  padding: 1rem;
`;

const CopyContainer = styled("div")``;

const BoxContent = styled("div")`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 10px;
  color: black;
  font-size: 12px;
  letter-spacing: 1px;
`;

const CopyOverlay = styled("div").attrs<{ background: any }>(props => ({
  style: {
    background: props.background
  }
}))<{ active: boolean; background: string }>`
  opacity: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.1);
  transition: transform 0.3s ease-in-out;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    transform: scale(9);
    z-index: 10;
    position: absolute;
    `};
`;

const CopyOverlayMessage = styled("div")<{ active: boolean }>`
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  transform: scale(0.1);
  color: white;

  ${({ active }) =>
    active &&
    `
  opacity: 1;
  transform: scale(1);
  z-index: 15;
  transition: all 0.4s ease-in-out;
  transition-delay: 0.3s;
  `}
`;

const CopyButton = styled("button")`
  width: 100px;
  height: 30px;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -15px;
  text-align: center;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  color: white;
  border: none;
  opacity: 0;
  text-transform: inherit;

  ${StyledBox}:hover & {
    opacity: 1;
    transition: 0.5s;
  }
`;

const MoreButton = styled("button")`
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  border: none;
  right: 0;
  bottom: 0;
  color: white;
  width: 60px;
  height: 30px;
  text-transform: inherit;
`;

type Props = {
  background: string;
  name: string;
  id: string;
  navigate?: any;
  showButton: boolean;
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
    return (
      <StyledBox background={background}>
        <CopyOverlay background={background} active={this.state.active} />
        <CopyOverlayMessage active={this.state.active}>
          <H1>Copied!</H1>
          <p style={{ fontWeight: 200, fontSize: "1.5rem" }}>
            {this.props.background}
          </p>
        </CopyOverlayMessage>
        <CopyContainer>
          <BoxContent>
            <span>{name}</span>
          </BoxContent>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <CopyButton>Copy</CopyButton>
          </CopyToClipboard>
        </CopyContainer>
        {showButton && (
          <MoreButton onClick={this.handleMoreClick}>More</MoreButton>
        )}
      </StyledBox>
    );
  }
}

export default ColorBox;
