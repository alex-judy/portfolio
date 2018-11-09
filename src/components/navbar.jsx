import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import "../styles/navbar.css";

const NavBar = props => {
  return (
    <div className="NavBar">
      <Navbar color="dark" dark expand="md">
        <Nav navbar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
          <NavItem>
            <Link to="/projects">Projects</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
