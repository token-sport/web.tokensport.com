import React from 'react'
import { Switch, Route } from 'react-router'

// SCREENS
import Home from 'containers/Home';
import Disruption from 'components/LayoutDisruption';

const Routes = () => (
  <Switch>
    <Route exact strict path="/" component={Home} />
    <Route exact strict path="/disruption" component={Disruption} />
  </Switch>
)

export default Routes