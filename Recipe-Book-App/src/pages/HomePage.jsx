import React from "react";
import RecipesList from "../components/RecipesList";
import Form from "../components/Form";

function HomePage(props) {
  const { recipes, setRecipes } = props;

  return (
    <div>
      <Form recipes={recipes} setRecipes={setRecipes} />
      <RecipesList recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default HomePage;
