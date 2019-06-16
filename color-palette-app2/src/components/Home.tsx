import React, { Component } from "react";
import { Link, RouteComponentProps } from "@reach/router";

type Props = {
  palettes: any;
};

export default class Home extends Component<Props & RouteComponentProps> {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map((palette: any) => (
          <Link to={`palette/${palette.id}`}>{palette.paletteName}</Link>
        ))}
      </div>
    );
  }
}
