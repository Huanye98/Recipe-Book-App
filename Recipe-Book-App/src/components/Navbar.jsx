import React from 'react'
import logo from "../assets/react.svg"
import menu from "../assets/burger-bar.png"
function Navbar() {
  return (
      <nav>
        <img src={menu} alt="" />
        <h1>Nombre de proyecto</h1>
        <img src={logo} alt='logo'></img>
        
      </nav>
  )
}

export default Navbar