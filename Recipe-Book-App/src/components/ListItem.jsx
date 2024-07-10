import React from 'react'
import list from  "../data/recipes.json"
import { useState } from 'react';

function ListItem() {

    const [recipes, setRecipes] = useState(list);
    let gordito = false;

    const handleDeleteRecipe = (index) => {
        
        const clone = [...recipes];
        clone.splice(index, 1)
        setRecipes(clone)
    }

  return (
    <div id='list-container'>
        {recipes.map((eachRecipe, index) => {
            return(
                
                <div className='recipe-container'>
                    <div className='img-food' style={{backgroundImage: `url(${eachRecipe.image})`}}></div>
                    <h3>{eachRecipe.name} {eachRecipe.calories >= 275 ? <span className='emoji'>❤️‍🩹</span> : <span className='emoji'>❤️</span>}</h3>
                    <div>
                        <p>Calorías: <span>{eachRecipe.calories}</span></p>
                        <p>Servings: <span>{eachRecipe.servings}</span></p>   
                    </div>
                    <button className='btn-delete' onClick={ () => handleDeleteRecipe(index) } >Delete!</button>
                </div>
            )
        })}
    </div>
  )
}

export default ListItem