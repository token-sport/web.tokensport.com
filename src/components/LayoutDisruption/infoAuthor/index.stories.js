import React from "react";
import { storiesOf } from "@storybook/react";

// COMPONENTS
import InfoAuthor from './';

// CONSTANTS
import AUTHOR from 'constants/author';

// eslint-disable-next-line react/prop-types
const Container = ({ author }) => (
  <div style={{ background: "#1d2837", padding: 10 }}>
    <InfoAuthor author={author}/>
  </div>
);

storiesOf("Description", module).add("large", () => (
  <Container author={AUTHOR}/>
));

