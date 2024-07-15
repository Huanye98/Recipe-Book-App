import React from "react";

function UpdateForm(props) {



  //  newName = event.target.value 

  // fuction handleSubmbit(){

  //   const newObject = {

  //     setname(newName)

  //   }

  //   clone.splice(x)
  //   clone.push(new object)

  // }





  return (
    <div>
      <form>
        <div>
          <label htmlFor="name"> Recipe name: </label>
          <input
            type="text"
            name="name"
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
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
