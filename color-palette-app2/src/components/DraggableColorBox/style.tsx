import styled from "styled-components";

export const Div = styled("div").attrs<{ background: string }>(props => ({
  style: {
    background: props.background
  }
}))<{ background: string }>`
  width: 20%;
  height: 25%;
  margin: 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
`;
