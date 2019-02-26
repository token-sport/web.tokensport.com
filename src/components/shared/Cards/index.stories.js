import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './'
import InfoUser from 'components/LayoutHome/InfoUser'
import Form from 'components/LayoutHome/Form'


// eslint-disable-next-line react/prop-types
const Container = ({ withGradient, showInHover, children }) => (
  <div style={{ background: '#1d2837', padding: 10, display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
    <Card padding="50px" withGradient={withGradient} showInHover={showInHover}>
      {children}
    </Card>
  </div >
)

storiesOf('Cards', module)
  .add('default', () => <Container withGradient={false}>
    <div>
      <InfoUser
        image="https://images.unsplash.com/photo-1516755946694-1985faebe07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        name="Esteban Aragón"
        profession="Fullstack Developer"
        country="Colombia"
      />
    </div>
  </Container>)
  .add('hover', () => <Container withGradient={false} showInHover>
    <div>
      <InfoUser
        image="https://images.unsplash.com/photo-1516755946694-1985faebe07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        name="Esteban Aragón"
        profession="Fullstack Developer"
        country="Colombia"
      />
    </div>
  </Container>)
  .add('gradient', () => <Container withGradient={true}>
    <Form />
  </Container>)
