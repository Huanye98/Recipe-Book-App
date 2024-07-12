import React from 'react'
import { Link } from "react-router-dom";
import About from "../pages/About";
import HomePage from '../pages/HomePage';

function Sidebar() {
  return (
    <div id='side-bar'>
      <Link to="/" element={<HomePage />}>HomePage  </Link>
      <Link to="/about" element={<About id="about" />}>About</Link>
    </div>
  )
}

export default Sidebar