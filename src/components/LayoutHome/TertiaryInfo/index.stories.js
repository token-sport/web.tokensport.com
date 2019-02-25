import React from 'react'
import { storiesOf } from '@storybook/react';
import TertiaryInfo from './'

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <TertiaryInfo
      title={<span>Notificaciones en tiempo real</span>}
      description={<span>Paga tu boleta de partido con TSP y te mantendremos al tanto de todo lo que pase en el evento, alineaciones, lesiones, horarios, lo que sea que pase.</span>}
    />
  </div>
)

storiesOf('Home', module).add('TertiaryInfo', () => <Container />)