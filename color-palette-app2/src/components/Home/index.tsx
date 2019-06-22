import React, { Component } from "react";
import { RouteComponentProps, navigate, Link } from "@reach/router";
import { StyledHome, Container, Nav, Palettes } from "./style";
import MiniPalette from "../MiniPalette";

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
            <Link to="palette/new">Create New Palette</Link>
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
