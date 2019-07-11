import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

export const StyledMiniPalette = styled("div")`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &.fade-exit: {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-out;
  }
`;

export const Colors = styled("div")`
  background-color: #dae1e4;
  height: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  overflow: hidden;
`;

export const H5 = styled("h5")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
`;

export const Span = styled("span")`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

export const MiniBox = styled("div").attrs<{ background: string }>(props => ({
  style: {
    background: props.background
  }
}))<{ background: string }>`
  width: 20%;
  height: 25%;
  margin: 0;
  display: flex;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Delete = styled(DeleteIcon)`
  color: white;
  background-color: #eb3d30;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s ease-in-out !important;

  ${StyledMiniPalette}: hover & {
    opacity: 1;
  }
`;
