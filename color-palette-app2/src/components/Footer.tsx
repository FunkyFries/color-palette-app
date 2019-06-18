import React from "react";
import styled from "styled-components";

const FooterStyles = styled("footer")`
  background-color: white;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
`;

const Footer = (props: any) => {
  const { paletteName, emoji } = props;
  return (
    <FooterStyles>
      {paletteName}
      <span style={{ fontSize: "1.5rem", margin: "0 1rem" }}>{emoji}</span>
    </FooterStyles>
  );
};

export default Footer;
