import React from 'react';
import { array } from 'prop-types'

// COMPONENTS
import Card from 'components/shared/Cards';
import InfoUser from 'components/LayoutHome/InfoUser'

// STYLES
import { Container } from './styles'

const GridTeam = ({ team }) => (
  <Container>
    {
      team.map((item, index) => (
        <Card key={index} padding="40px" withGradient={false} showInHover>
          <InfoUser
            image={item.photo}
            name={item.name}
            profession={item.profession}
            country={item.country}
            shadow={item.color}
          />
        </Card>
      ))
    }
  </Container>
)

GridTeam.defaultProps = {
  team: []
}

GridTeam.propTypes = {
  team: array
}


export default GridTeam