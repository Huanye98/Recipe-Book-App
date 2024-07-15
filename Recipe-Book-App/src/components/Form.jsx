import React, { useState } from 'react'

function Form(props) {
    const [name,setName] = useState("")
    const [servings,setServings] = useState(0)
    const [calories,setCalories] = useState(0)
    const [img,setImg] = useState('')
    const [newId,setNewId] = useState(0);

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
        generateNewId();

        if(img === ""){
            setImg("../assets/images.jpg")
        }else{
            setImg(img)
        }
        const newObject = {name,calories,servings,img}

        
        props.setRecipes([...props.recipes, newObject])

        

    }

    function generateNewId(){
        setNewId(Math.floor(Math.random()*10000000))
    }

  return (
    <div id='form-container'>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name"> Recipe name: </label>
            <input type='text' name='name' placeholder='Enter recipe name' onChange={handleName} value={name}></input>
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
            <input type="text" name='image' placeholder="Enter image url" onChange={handleImg} value={img}/>
            <br />
            </div>
            <button type='submit'>Submit</button>
            
        </form>
    </div>
  )
}

export default Form