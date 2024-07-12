import React from "react";
import list from "../data/recipes.json";
import { Link, useParams } from "react-router-dom";

function ListItem(props) {
  let { name, calories, servings, image, id } = props.recipe;
  const params = useParams();
  const targetItem =list.find (recipe=>recipe.id === params.recipeId);

  return (
    <div className="recipe-container">
      <div
        className="img-food"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="container-text">
        <h3>
          {name}
          {calories >= 275 ? (
            <span className="emoji">❤️‍🩹</span>
          ) : (
            <span className="emoji">❤️</span>
          )}
        </h3>
        <p>
          Calorías: <span>{calories}</span>
        </p>
        <p>
          Servings: <span>{servings}</span>
        </p>
      </div>
      <div id="card-button-div">
      <button
        className="btn-delete"
        onClick={() => props.handleDeleteRecipe(id)}
      >
        Delete
      </button>
      <Link to={`recipes/${id}`} key={id}>
      <button className="view-more">view more</button>
      </Link>
      </div>
    </div>
  );
}

export default ListItem;
