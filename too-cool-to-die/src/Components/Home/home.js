import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./home.css";

function Home() {
  return (
    <>
      <div className= "background" alt = "TCTD">
        <div className="mainContainer">
          <img src={logo} style={{ width: '50%', height: 'auto', marginTop: '10px' }} alt="logo"/>
          <div className = "buttonContainer">
            <button className="button" style={{backgroundColor: "#008080"}}>
              <NavLink style={{color: "white"}} to="/signup-patients" className="navlink">
                New Patient
              </NavLink>
            </button>
            <button className="button" style={{backgroundColor: "#373130"}}>
              <NavLink style={{color: "white"}} to="/signup-professional" className="navlink">
                New Professional
              </NavLink>
            </button>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Home;
