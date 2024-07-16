import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [servings, setServings] = useState(0);
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }
  function handleServings(event) {
    setServings(event.target.value);
  }
  function handleCalories(event) {
    setCalories(event.target.value);
  }
  function handleImage(event) {
    setImage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newObject = { name, calories, servings, image };

    if (newObject.image === "") {
        newObject.image = "images.jpg"
    }

    props.setRecipes([newObject, ...props.recipes]);
  }


  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Recipe name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter recipe name"
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

          <label htmlFor="image"> Image url: </label>
          <input
            type="text"
            name="image"
            placeholder="Enter image url"
            onChange={handleImage}
            src={image}
          />
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
