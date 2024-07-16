import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";

function RecipeDetails(props) {
  let params = useParams();
  let targetRecipe = props.recipes.find((e) => e.id === params.recipeId);

  const { recipes, setRecipes } = props;

  const [isEditBtnShowing, setIsEditBtnShowing] = useState(false);

  const handleEditBtn = () => {
    setIsEditBtnShowing(!isEditBtnShowing);
  };

  return (
    <>
      <div className="recipe-details">
        <div
          className="details-img-food"
          style={{ backgroundImage: `url(${targetRecipe.image})` }}
        ></div>
        <div className="details-container-text">
          <h3>
            {targetRecipe.name}
            {targetRecipe.calories >= 275 ? (
              <span className="emoji">❤️‍🩹</span>
            ) : (
              <span className="emoji">❤️</span>
            )}
          </h3>
          <p>
            Calorías: <span>{targetRecipe.calories}</span>
          </p>
          <p>
            Servings: <span>{targetRecipe.servings}</span>
          </p>
        <Link to="/">
          <button className="details-back-btn">Back</button>
        </Link>

        <button type="edit" onClick={handleEditBtn}>
          Edit
        </button>
        </div>
        {isEditBtnShowing && (
          <UpdateForm
            targetRecipe={targetRecipe}
            recipes={recipes}
            setRecipes={setRecipes}
            setIsEditBtnShowing={setIsEditBtnShowing}
          />
        )}
      </div>
    </>
  );
}

export default RecipeDetails;
