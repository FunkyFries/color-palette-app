import React, { Component } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import styled from "styled-components";
import MiniPalette from "./MiniPalette";

const StyledHome = styled("div")`
  background-color: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled("div")`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Nav = styled("nav")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
`;

const Palettes = styled("div")`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;

type Props = {
  palettes: any;
};

export default class Home extends Component<Props & RouteComponentProps> {
  goToPalette = (id: string) => {
    navigate(`palette/${id}`);
  };
  render() {
    const { palettes } = this.props;
    return (
      <StyledHome>
        <Container>
          <Nav>
            <h1>React Colors</h1>
          </Nav>
          <Palettes>
            {palettes.map((palette: any) => (
              <MiniPalette
                key={palette.id}
                {...palette}
                handleClick={this.goToPalette}
              />
            ))}
          </Palettes>
        </Container>
      </StyledHome>
    );
  }
}
