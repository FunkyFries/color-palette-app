import React, { Component } from "react";
import { RouteComponentProps, navigate, Link } from "@reach/router";
import { StyledHome, Container, Nav, Palettes } from "./style";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
            <TransitionGroup component={null}>
              {palettes.map((palette: any) => (
                <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                  <MiniPalette
                    deletePalette={deletePalette}
                    key={palette.id}
                    {...palette}
                    handleClick={this.goToPalette}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Palettes>
          <div />
        </Container>
      </StyledHome>
    );
  }
}
