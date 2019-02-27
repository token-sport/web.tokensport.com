import React from 'react';
import { storiesOf } from '@storybook/react';

// COMPONENTS
import Footer from 'components/LayoutHome/Footer';

const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Footer />
  </div>
);

storiesOf('Footer', module).add('default', () => <Container />);
