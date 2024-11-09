import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

class my_navbar extends React.Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="App.css" />
        <link rel="stylesheet" href="index.css" />
        <Navbar className="mt-4" expand="sm" collapseOnSelect fixed="top">
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <ul>
                <li className="nav_li">
                  <NavLink to="/" className="navlink">
                    Home
                  </NavLink>
                </li>
                <li className="nav_li">
                  <NavLink to="/signup-patients" className="navlink">
                    Patients
                  </NavLink>
                </li>
                <li className="nav_li">
                  <NavLink to="/signup-professional" className="navlink">
                    Professional
                  </NavLink>
                </li>
                <li className="nav_li">
                  <NavLink to="/signup-professional" className="navlink">
                    Finder
                  </NavLink>
                </li>
                <li className="nav_right">
                  <NavLink to="/signup-professional" className="navlink">
                    Log In
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default my_navbar;
