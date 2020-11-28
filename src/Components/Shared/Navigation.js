import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" fixed="top" bsPrefix="navbar" expand="lg">
        <Router>
          <Link to="/">
            <Navbar.Brand className="float-right">
              <h1>Token Sports</h1>
            </Navbar.Brand>
          </Link>
        </Router>
        <Button className="float-left">Súmate</Button>
      </Navbar>
    </>
  );
};

export default Navigation;
