import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <>
      <Navbar
        classname="mb-5"
        bg="primary"
        fixed="top"
        bsPrefix="navbar"
        expand="lg"
      >
        <Navbar.Brand>
          <h1>Token Sports</h1>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Navigation;
