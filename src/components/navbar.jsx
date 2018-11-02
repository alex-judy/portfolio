import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "../styles/navbar.css";

const NavBar = props => {
  //const { onAlert } = props;

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
    // <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    //   <div className="container-fluid">
    //     <div>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //         <li>
    //           <Link to="/projects">Projects</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
