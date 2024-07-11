import React from "react";
import { Link } from "react-router-dom";
import list from "../data/recipes.json";

function ListItem(props) {
    let {name, calories} = list

  return (
    <div className="recipe-container">
      <div
        className="img-food"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <h3>
        {name}{" "}
        {calories >= 275 ? (
          <span className="emoji">❤️‍🩹</span>) : (
          <span className="emoji">❤️</span>
        )}
      </h3>
      <div>
        <p>
          Calorías: <span>{props.recipe.calories}</span>
        </p>
        <p>
          Servings: <span>{props.recipe.servings}</span>
        </p>
      </div>
      <button className="btn-delete" onClick={() => props.handleDeleteRecipe(props.index)}>
        Delete
      </button>
    </div>
  );
}

export default ListItem;
