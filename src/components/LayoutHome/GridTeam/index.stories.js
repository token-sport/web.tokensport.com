import React from 'react'
import { storiesOf } from '@storybook/react'

import GridTeam from './'

import { team } from 'fixture/'

storiesOf('Home', module).add('GridTeam', () => <GridTeam team={team} />)