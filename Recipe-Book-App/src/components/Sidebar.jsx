import React from 'react'
import { Link } from "react-router-dom";
import About from "../pages/About";

function Sidebar() {
  return (
    <div id='side-bar'>
      <a href="#home-page">Home</a><br/>
      <Link to="/about" element={<About id="about" />}>About</Link>
    </div>
  )
}

export default Sidebar