import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about">
      <h2 id="about-h2">Somos programadores humildes</h2>
      <a href="https://github.com/Huanye98/Recipe-Book-App">Click here to navigate to source code</a>

      <div id="creadores">
      <h3>Made by:</h3>
        <ul>
          <li>Michelle srnedni</li>
          <li>Mario lázaro</li>
          <li>Huanye zhu</li>
        </ul>
      </div>
      <Link to="/">
        <button className="about-back-btn">Back</button>
      </Link>
      
    </div>
  );
}

export default About;
