import React from "react";
import ListItem from "./ListItem";


function RecipesList(props) {
 //const {recipes, setRecipes} = props
// cuando se añade un objnuevo no hay id por lo que no hay key

  const handleDeleteRecipe = (id) => {
    const clone = [...recipes];
    clone.splice(id, 1);
    setRecipes(clone);
  };

 

  return (
    <div id="list-container">
      {props.recipes.map((recipe)=> (
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
