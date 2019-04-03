import React from "react";
import { array, string, oneOfType, object, bool } from "prop-types";

// STYLES
import { Description } from "./styles";

const DescriptionComponent = ({
  size,
  children,
  margin,
  direction,
  color,
  bold,
  isHero
}) => (
  <Description
    margin={margin}
    size={size}
    direction={direction}
    color={color}
    bold={bold}
    isHero={isHero}
  >
    {children}
  </Description>
);

DescriptionComponent.defaultProps = {
  margin: "0px",
  direction: "unset",
};

DescriptionComponent.propTypes = {
  children: oneOfType([array, string, object]),
  size: string,
  margin: string,
  direction: string,
  color: string,
  bold: string,
  isHero: bool
};

export default DescriptionComponent;
