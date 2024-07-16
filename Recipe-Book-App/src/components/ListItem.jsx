import React from "react";
import { Link } from "react-router-dom";

function ListItem(props) {
  let { name, calories, servings, image, id } = props.eachRecipe;

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
          onClick={() => props.handleDeleteRecipe(props.index)}
        >
          Delete
        </button>
        <Link to={`recipes/${id}`}>
          <button className="view-more">View more</button>
        </Link>
      </div>
    </div>
  );
}

export default ListItem;
