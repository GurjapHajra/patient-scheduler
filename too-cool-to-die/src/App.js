import "./App.css";
import React from "react";
import Home from "./Components/Home/home"
import Navbar from "./Components/Nav/nav"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="projects" element={<Projects />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
