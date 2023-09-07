import React from "react";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <nav className="navbar">
      <ul className="unbulleted-list">
        <li>
          <Link to="/">Triangle</Link>
        </li>
        <li>
          <Link to="/area">Area</Link>
        </li>
        <li>
          <Link to="/hypotenuse">Hypotenuse</Link>
        </li>
        {/* <li>
          <Link to="/quiz">Quiz</Link>
        </li> */}
      </ul>
    </nav>
  );
}
