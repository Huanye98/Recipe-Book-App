import React from "react";
import { Link } from "react-router-dom";

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function About() {
  return (
    <div>
      
      <Navbar />
      <h2 id="about-h2">Somos programadores humildes</h2>
      <Sidebar />
      <Footer />

      <Link to="/">
        <button className="about-back-btn">Back</button>
      </Link>
    </div>
  );
}

export default About;
