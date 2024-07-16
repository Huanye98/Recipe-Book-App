import React, { useState } from "react";

function UpdateForm(props) {
  const [name, setName] = useState("");
  const [servings, setServings] = useState(0);
  const [calories, setCalories] = useState(0);

  const {targetRecipe, recipes, setRecipes} = props

  function handleName(event) {
    setName(event.target.value);
  }
  function handleServings(event) {
    setServings(event.target.value);
  }
  function handleCalories(event) {
    setCalories(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    targetRecipe.name = name
    targetRecipe.calories = calories
    targetRecipe.servings = servings
    recipes.splice(recipes.indexOf(targetRecipe), 1)
    const clone = [...recipes, targetRecipe]
    setRecipes(clone)
  }

  return (
    <div id="update-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Recipe name: </label>
          <input
            type="text"
            name="name"
            onChange={handleName}
            value={name}
          ></input>
          <br />
          <label htmlFor="calories">Calories :</label>
          <input
            type="text"
            name="calories"
            onChange={handleCalories}
            value={calories}
          ></input>
          <br />
        </div>
        <div>
          <label htmlFor="servings"> Servings: </label>
          <input
            type="text"
            name="servings"
            onChange={handleServings}
            value={servings}
          ></input>
          <br />
        </div>
          <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UpdateForm;
