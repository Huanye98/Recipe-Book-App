import React from "react";
import list from "../data/recipes.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link, useParams } from "react-router-dom";

function RecipeDetails() {

  let params = useParams()
  let targetRecipe = list.find(e => e.id === params.recipeId)

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="recipe-details">
        <div className="details-img-food" style={{ backgroundImage: `url(${targetRecipe.image})` }}></div>
        <div className="details-container-text">
          <h3>
            {targetRecipe.name}
            {targetRecipe.calories >= 275 ? (<span className="emoji">❤️‍🩹</span>) : (<span className="emoji">❤️</span>)}
          </h3>
          <p>Calorías: <span>{targetRecipe.calories}</span></p>
          <p>Servings: <span>{targetRecipe.servings}</span></p>
        </div>
        <Link to="/">
          <button className="details-back-btn">Back</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default RecipeDetails;
