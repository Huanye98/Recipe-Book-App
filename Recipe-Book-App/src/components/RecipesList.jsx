import React from "react";
import ListItem from "./ListItem";

function RecipesList(props) {
  //const {recipes, setRecipes} = props
  // cuando se añade un objnuevo no hay id por lo que no hay key

  const { recipes, setRecipes } = props;

  const handleDeleteRecipe = (index) => {
    const clone = [...props.recipes];
    clone.splice(index, 1);
    props.setRecipes(clone);
  };

  return (
    <div id="list-container">
      {props.recipes.map((eachRecipe, index) => (
        <ListItem
          key={eachRecipe.id}
          eachRecipe={eachRecipe}
          index={index}
          handleDeleteRecipe={handleDeleteRecipe}
        />
      ))}
    </div>
  );
}

export default RecipesList;
