import React from 'react';
import { array } from 'prop-types'

// COMPONENTS
import Card from 'components/shared/Cards';
import InfoUser from 'components/LayoutHome/InfoUser'

// STYLES
import { Container, Grid, SubTitle } from './styles'
import Title from 'components/shared/Title';
import Description from 'components/shared/Description';

const GridTeam = ({ team }) => (
  <Container>
    <Title size="xlg" bold="800">Dream Team</Title>
    <Description size="xmd" color="white">
      <SubTitle>Descubre el equipo titular de Token Sport</SubTitle>
    </Description>
    <Grid>
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
    </Grid>
  </Container>
)

GridTeam.defaultProps = {
  team: []
}

GridTeam.propTypes = {
  team: array
}


export default GridTeam