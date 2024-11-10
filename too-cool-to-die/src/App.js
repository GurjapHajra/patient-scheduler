import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home/home";
import Navbar from "./Components/Nav/nav";
import SignupPatient from "./Components/SignUp/signup-patient";
import SignupProfessional from "./Components/SignUp/signup-professional";
import Finder from "./Components/Finder/finder";
import Login from "./Components/Login/login";
import Dashboard from "./Components/Login/dashboard";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <FadeRoutes />
    </Router>
  );
}

function FadeRoutes() {
  // Use state to track the route
  const [fadeKey, setFadeKey] = useState(0);

  // Detect route changes using useLocation
  const location = useLocation();

  // Trigger fade-in animation when location changes
  useEffect(() => {
    setFadeKey(prevKey => prevKey + 1); // Update key to trigger re-animation
  }, [location]);

  return (
    <>
      <Navbar />
      <div key={fadeKey} className="App fade-in">
      
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="signup-patients" element={<SignupPatient />} />
        <Route path="signup-professional" element={<SignupProfessional />} />
        <Route path="finder" element={<Finder />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    </>
    
  );
}

export default App;
