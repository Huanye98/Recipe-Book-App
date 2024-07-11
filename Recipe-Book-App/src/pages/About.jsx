import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>Somos programadores humildes</h2>
      <Link to="/">
        <button className="back-btn">
          Back
        </button>
      </Link>
    </div>
  );
}

export default About;
