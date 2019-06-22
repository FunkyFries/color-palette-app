import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";
import { H1 } from "./style";

export default class NewPalette extends Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <H1>Hello!</H1>
      </div>
    );
  }
}
