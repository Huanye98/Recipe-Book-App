import React from 'react'
import logo from "../assets/react.svg"
import menu from "../assets/burger-bar.png"
function Navbar() {
  return (
      <nav>
        <img src={menu} id='burger-menu' alt="" />
        <img src={logo} alt='logo' id='logo'></img>
        <h1>Nombre de proyecto</h1>
        
        
      </nav>
  )
}

export default Navbar