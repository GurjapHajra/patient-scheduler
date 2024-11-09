import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="App.css" />
        <link rel="stylesheet" href="index.css" />
        <Navbar
          className="align-items-left justify-content-center"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <ul>
                <li>
                  <NavLink to="/home" className="navlink">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="navlink">
                    Sign Up
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

export default Header;
