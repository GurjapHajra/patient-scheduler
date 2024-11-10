import "./App.css";
import React from "react";
import Home from "./Components/Home/home"
import Navbar from "./Components/Nav/nav"
import SignupPatient from "./Components/SignUp/signup-patient"
import SignupProfessional from "./Components/SignUp/signup-professional"
import Finder from "./Components/Finder/finder"
import Login from "./Components/Login/login"
import Dashboard from "./Components/Login/dashboard"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="signup-patients" element={<SignupPatient />} />
          <Route path="signup-professional" element={<SignupProfessional />} />
          <Route path="finder" element={<Finder />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
