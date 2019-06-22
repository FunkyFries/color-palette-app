import styled from "styled-components";

export const StyledBox = styled("div").attrs<{
  background: any;
  isDarkColor: boolean;
}>(props => ({
  style: {
    background: props.background,
    color: props.isDarkColor ? "white" : "black"
  }
}))<{ background: string; isDarkColor: boolean }>`
  width: 20%;
  margin: 0;
  display: flex;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
`;

export const H1 = styled("h1")`
  font-weight: 400;
  text-shadow: 1px 2px black;
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  padding: 1rem;
`;

export const BoxContent = styled("div")`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 1px;
`;

export const CopyOverlay = styled("div").attrs<{ background: any }>(props => ({
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

export const CopyOverlayMessage = styled("div")<{ active: boolean }>`
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
  color: inherit;

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

export const CopyButton = styled("button")`
  color: inherit;
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
  border: none;
  opacity: 0;
  text-transform: inherit;

  ${StyledBox}:hover & {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const MoreButton = styled("button")`
  color: inherit;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  border: none;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 30px;
  text-transform: inherit;
`;

export const P = styled("p")`
  fontweight: 200;
  fontsize: 1.5rem;
`;
