import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextValidator } from "react-material-ui-form-validator";

export const AddColorButton = styled(Button).attrs<{
  paletteIsFull: boolean;
  currentcolor: string;
}>(props => ({
  style: {
    backgroundColor: props.paletteIsFull ? "grey" : props.currentcolor
  }
}))<{ currentcolor: string; paletteIsFull: boolean }>`
  width: 100%;
  padding: 0.8rem !important;
  font-size: 1.5rem !important;
`;

export const ColorNameInput = styled(TextValidator)`
  width: 100%;
`;
