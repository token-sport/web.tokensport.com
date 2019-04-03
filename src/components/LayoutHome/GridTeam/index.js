import React from 'react';
import { object, string } from 'prop-types'

// COMPONENTS
import Card from 'components/shared/Cards';
import InfoUser from 'components/LayoutHome/InfoUser'

// STYLES
import { Container, Grid, SubTitle } from './styles'
import Title from 'components/shared/Title';
import Description from 'components/shared/Description';

const GridTeam = ({ teamInfo, id }) => (
  <Container id={id}>
    <Title size="xlg" bold="800">{teamInfo.title}</Title>
    <Description size="xmd" color="white" margin="10px 0">
      <SubTitle>{teamInfo.description}</SubTitle>
    </Description>
    <Grid>
      {
        teamInfo.team.map((item, index) => (
          <Card key={index} padding="40px" withGradient={false} showInHover>
            <InfoUser
              image={item.photo}
              name={item.name}
              profession={item.profession}
              country={item.country}
              networks={item.networks}
              shadow={item.color}
            />
          </Card>
        ))
      }
    </Grid>
  </Container>
)

GridTeam.defaultProps = {
  teamInfo: {}
}

GridTeam.propTypes = {
  teamInfo: object,
  id: string
}


export default GridTeam