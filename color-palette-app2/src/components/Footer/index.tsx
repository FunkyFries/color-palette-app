import React from "react";
import { FooterStyles, Span } from "./style";

const Footer = (props: any) => {
  const { paletteName, emoji } = props;
  return (
    <FooterStyles>
      {paletteName}
      <Span>{emoji}</Span>
    </FooterStyles>
  );
};

export default Footer;
