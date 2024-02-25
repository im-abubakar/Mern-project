import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Travelling</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/destinations">Destinations</Nav.Link>
            <Nav.Link as={NavLink} to="/packages">Packages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
