import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Home from "./Components/Home";
import Fans from "./Components/Fans";
import Collaborators from "./Components/Collaborators";
import Partners from "./Components/Partners";
import Market from "./Components/Market";
import Blog from "./Components/Blog";
import Team from "./Components/Team";
import Legal from "./Components/Legal";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/legal">
            <Legal />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/market">
            <Market />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/collaborators">
            <Collaborators />
          </Route>
          <Route path="/fans">
            <Fans />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
