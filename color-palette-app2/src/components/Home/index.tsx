import React, { Component } from "react";
import { RouteComponentProps, navigate, Link } from "@reach/router";
import { StyledHome, Container, Nav, Palettes } from "./style";
import MiniPalette from "../MiniPalette";

type Props = {
  palettes: any;
  deletePalette: any;
};

export default class Home extends Component<Props & RouteComponentProps> {
  goToPalette = (id: string) => {
    navigate(`palette/${id}`);
  };
  render() {
    const { palettes, deletePalette } = this.props;
    const templateRows = Math.ceil(palettes.length / 3);
    return (
      <StyledHome>
        <Container>
          <Nav>
            <h1>React Colors</h1>
            <Link to="palette/new">Create Palette</Link>
          </Nav>
          <Palettes templateRows={templateRows}>
            {palettes.map((palette: any) => (
              <MiniPalette
                deletePalette={deletePalette}
                key={palette.id}
                {...palette}
                handleClick={this.goToPalette}
              />
            ))}
          </Palettes>
          <div />
        </Container>
      </StyledHome>
    );
  }
}
