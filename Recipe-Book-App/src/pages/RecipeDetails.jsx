// import React from "react";
// import list from "../data/recipes.json";
// import { useParams } from "react-router-dom";

// function RecipeDetails() {
//   const params = useParams();
//   const recipeInfoName = list.find((recipe) => recipe.name === params.recipeName);

//   //  const params = useParams();
//   //  const studentProfile = studentsData.find((student) => student._id === params.studentId);
//   return (
//     <div className="recipe-container">
//       <div
//         className="img-food"
//         style={{ backgroundImage: `url(${recipeInfo.image})` }}
//       ></div>
//       <h3>
//         {recipeInfo.name}{" "}
//         {recipeInfo.calories >= 275 ? (
//           <span className="emoji">❤️‍🩹</span>
//         ) : (
//           <span className="emoji">❤️</span>
//         )}
//       </h3>
//       <div>
//         <p>
//           Calorías: <span>{recipeInfo.calories}</span>
//         </p>
//         <p>
//           Servings: <span>{recipeInfo.servings}</span>
//         </p>
//       </div>
//       <button className="btn-delete" onClick={() => handleDeleteRecipe(index)}>
//         Delete
//       </button>

//       <Link to={`/recipes/${recipeInfo.id}`}>
//         <button className="btn-view-more">Ver Más</button>
//       </Link>
//     </div>
//   );
// }

// export default RecipeDetails;
