import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./navbar.css";
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          RealEstatePro
        </Navbar.Brand>
        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Main Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Buy" className="px-3">
              Buy
            </Nav.Link>
            <Nav.Link as={Link} to="/Sell" className="px-3">
              Sell
            </Nav.Link>
            <Nav.Link as={Link} to="/Rent" className="px-3">
              Rent
            </Nav.Link>
            <Nav.Link as={Link} to="/Live-auction" className="px-3">
              Live Auction
            </Nav.Link>
            <Nav.Link as={Link} to="/About-us" className="px-3">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/Help" className="px-3">
              Help
            </Nav.Link>
          </Nav>
          {/* Login/Signup Button */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">
              <Button variant="primary" className="rounded-pill">
                Login / Sign Up
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
