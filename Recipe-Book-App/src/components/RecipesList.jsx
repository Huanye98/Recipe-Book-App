import React from "react";
import ListItem from "./ListItem";
import { useState } from "react";
import list from "../data/recipes.json";


function RecipesList() {
  const [recipes, setRecipes] = useState(list);

  const handleDeleteRecipe = (id) => {
    const clone = [...recipes];
    clone.splice(id, 1);
    setRecipes(clone);
  };

 

  return (
    <div id="list-container">
      {recipes.map((recipe)=> (
        <ListItem
          key={recipe.id}
          recipe={recipe}
          handleDeleteRecipe={handleDeleteRecipe}
        />
        )
      )}
    </div>
  );
}

export default RecipesList;
