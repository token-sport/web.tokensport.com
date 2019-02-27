import React from 'react';
import { storiesOf } from '@storybook/react';

import InfoPercent from './';

// eslint-disable-next-line react/prop-types
const Container = ({ color, percent, children }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <InfoPercent color={color} percent={percent}>{ children }</InfoPercent>
  </div>
);

storiesOf('InfoPercent', module)
  .add('neonBlue', () => <Container color="neonBlue" percent="1.13%">Equipo Inicial</Container>)
  .add('neonGreen', () => <Container color="neonGreen" percent="15.18%">Inversion Temprana</Container>)
  .add('neonOrange', () => <Container color="neonOrange" percent="2.5%">Inversion Temprana</Container>)
  .add('opaqueBlue', () => <Container color="opaqueBlue" percent="10%">ICO</Container>);