
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';



const NavigationBar = () => {

  return (

    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">

      <Container>

        {/* Brand Logo */}

        <Navbar.Brand as={Link} to="/">ABC Chartered Accountant</Navbar.Brand>



        {/* Hamburger Toggle */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />



        {/* Navigation Menu */}

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>

            <Nav.Link as={Link} to="/services">Services</Nav.Link>

            <Nav.Link as={Link} to="/insights">Insights</Nav.Link>

            <Nav.Link as={Link} to="/approach">Approach</Nav.Link>

            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );

};



export default NavigationBar;