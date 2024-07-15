import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2 id="about-h2">Somos programadores humildes</h2>

      <Link to="/">
        <button className="about-back-btn">Back</button>
      </Link>
    </div>
  );
}

export default About;
