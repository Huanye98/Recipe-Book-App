import React from 'react'
import ListItem from './ListItem';
import { useState } from "react";
import list from "../data/recipes.json";


function RecipesList() {
  const [recipes, setRecipes] = useState(list);


  const handleDeleteRecipe = (index) => {
      
      const clone = [...recipes];
      clone.splice(index, 1)
      setRecipes(clone)
  }
  return (

    <div id="list-container">
      {recipes.map((recipe, index) => {
        return <ListItem key={index} image= {recipe.image} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe} index={index}/>
      })}
    </div>
  )
}

export default RecipesList;