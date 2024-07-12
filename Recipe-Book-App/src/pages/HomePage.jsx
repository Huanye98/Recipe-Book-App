import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RecipesList from '../components/RecipesList'
import Form from '../components/Form'
import { useState } from "react";
import list from "../data/recipes.json";


function HomePage() {
  const [recipes, setRecipes] = useState(list);
  return (
    <div >
        <Navbar/>
        <Form recipes={recipes} setRecipes={setRecipes}/>
        <RecipesList recipes={recipes} setRecipes={setRecipes}/>
        <Sidebar/>
        
        <Footer/>
    </div>
  )
}

export default HomePage