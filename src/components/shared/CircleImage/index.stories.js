import React from "react";
import { storiesOf } from "@storybook/react";

// COMPONENTS
import CircleImage from "./";
import Image from "components/shared/Image";

// eslint-disable-next-line react/prop-types
const Container = ({ children, shadow, width, height }) => (
  <div style={{ background: "#1d2837", padding: 10 }}>
    <CircleImage shadow={shadow} width={width} height={height}>{children}</CircleImage>
  </div>
);

storiesOf("Description", module).add("large", () => (
  <Container shadow="neonBlue" width="100px" height="100px">
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FAlejoFernandez.png?alt=media&token=25b4ca79-335a-4a13-b15c-fcab6bf8907a"
      alt="altText"
      width="100px"
      height="100px"
      isGray={true}
    />
  </Container>
));
