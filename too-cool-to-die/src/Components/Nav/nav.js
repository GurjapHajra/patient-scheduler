import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function MyNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage or context for login state
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove login state from localStorage
  };

  return (
    <>
      <link rel="stylesheet" href="App.css" />
      <link rel="stylesheet" href="index.css" />
      <Navbar
        className="navbar-blur pt-4"
        expand="sm"
        collapseOnSelect
        fixed="top"
      >
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <ul>
              <li className="nav_li nav_li_left">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav_li">
                <NavLink
                  to="/signup-patients"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  Patients
                </NavLink>
              </li>
              <li className="nav_li">
                <NavLink
                  to="/signup-professional"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  Professional
                </NavLink>
              </li>
              <li className="nav_li nav_li_right">
                <NavLink
                  to="/finder"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  Finder
                </NavLink>
              </li>
              <li className="nav_right nav_li_left nav_li_right">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={logout}
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  {isLoggedIn ? "Logout" : "Login"}
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
