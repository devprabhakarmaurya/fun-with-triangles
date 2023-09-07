import "./styles.css";
import React from "react";
import IsTriangle from "./Components/IsTriangle";
import Area from "./Components/Area";
import Hypotenuse from "./Components/Hypotenuse";
import Quiz from "./Components/Quiz";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 className="header-heading">Fun with Triangles</h1>
        </header>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<IsTriangle />} />
            <Route exact path="/area" element={<Area />} />
            <Route exact path="/hypotenuse" element={<Hypotenuse />} />
            {/* <Route exact path="/quiz" element={<Quiz />} /> */}
          </Routes>
        </div>
        <footer className="footer">
          <span
            className="footer-content"
            role="img"
            aria-label="Made By Prabhakar Maurya"
          >
            Made with ❤️ by Prabhakar Maurya
          </span>
        </footer>
      </div>
    </Router>
  );
}
