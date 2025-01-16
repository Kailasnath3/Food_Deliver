import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import Trog_symbol from "./images/Trog_symbol.jpg";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Navbar.Brand href="#home" className="navbar-brand-custom">
        <img
          src={Trog_symbol}
          alt="Fudo Logo"
          className="navbar-logo"
        />
        <span className="navbar-brand-text">Fudo</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navbar-links">
          <Nav.Link href="#why-fudo" className="nav-link-custom">Why Fudo?</Nav.Link>

          <NavDropdown
            title={<span className="dropdown-title">Services <span className="dropdown-arrow">&#9662;</span></span>}
            id="services-dropdown"
            className="nav-dropdown-custom"
          >
            <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
            <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<span className="dropdown-title">Menu <span className="dropdown-arrow">&#9662;</span></span>}
            id="menu-dropdown"
            className="nav-dropdown-custom"
          >
            <NavDropdown.Item href="#menu1">Menu 1</NavDropdown.Item>
            <NavDropdown.Item href="#menu2">Menu 2</NavDropdown.Item>
            <NavDropdown.Item href="#menu3">Menu 3</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>

          {/* Search Icon and Input */}
          <Form className="search-form">
            <FormControl
              type="text"
              placeholder="Search"
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </Form>

          {/* Cart Icon */}
          <Nav.Link href="#cart" className="nav-link-custom">
            <FaShoppingCart size={20} />
          </Nav.Link>

          {/* Login Button */}
          <Nav.Link href="#login" className="login-button-container">
            <Button className="login-button">Login</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
