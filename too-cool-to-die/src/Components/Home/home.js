import React from "react";
import logo from "./assets/logo.png"
import "./home.css";

function Home() {
  return (
    <>
      <div className= "background" alt = "TCTD">
        <div className="mainContainer">
          <img src={logo} className="Logo" style={{ width: '50%', height: 'auto', marginTop: '10px' }} alt="logo"/>
          <div className = "buttonContainer">
            <button className="button" style={{backgroundColor: "#008080"}}>Patient</button>
            <button className="button" style={{backgroundColor: "#373130"}}>Professional</button>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Home;
