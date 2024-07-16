import React from 'react'
import logo from "../assets/logo-recipe.png"
import menu from "../assets/burger-bar.png"
function Navbar() {
  return (
      <nav>
        <img src={menu} id='burger-menu' alt="" />
        <img src={logo} alt='logo' id='logo'></img>
        <h1>Yaya's Recipes</h1>
        
        
      </nav>
  )
}

export default Navbar