import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <Nav defaultActiveKey="/home" className="flex-column sidebar">
        <Router>
          <Link to="/fans">Hinchas</Link>
          <Link to="/collaborators">Colaboradores</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/market">Market</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/team">Team</Link>
          <Link to="/legal">Legal</Link>
        </Router>
      </Nav>
    </>
  );
};

export default Sidebar;
