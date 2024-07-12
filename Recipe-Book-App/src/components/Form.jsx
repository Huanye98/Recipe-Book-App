import React, { useState } from 'react'

function Form(props) {
    const [name,setName] = useState("")
    const [servings,setServings] = useState(0)
    const [calories,setCalories] = useState(0)
    const [img,setImg] = useState("")

    function handleName(event){
        setName(event.target.value)
    }
    function handleServings(event){
        setServings(event.target.value)
    }
    function handleCalories(event){
        setCalories(event.target.value)
    }
    function handleImg(event){
        setImg(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        setName(name)
        setServings(servings)
        setCalories(calories)
        setImg(img)
        const newObject = {name,calories,servings,img}

        
        props.setRecipes([...props.recipes, newObject])

    }

  return (
    <div id='form-container'>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name"> Recipe name: </label>
            <input type='text' name='name' onChange={handleName} value={name}></input>
            <br />
            <label htmlFor="calories">Calories :</label>
            <input type='text' name='calories' onChange={handleCalories} value={calories}></input>
            <br />
            </div>
            <div>
            <label htmlFor="servings"> Servings: </label>
            <input type='text' name='servings'  onChange={handleServings} value={servings}></input>
            <br />
            <label htmlFor="image"> Image url: </label>
            <input type="text" name='image' placeholder='../assets/burger-bar.png' onChange={handleImg} value={img}/>
            <br />
            <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form