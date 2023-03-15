import React from 'react';
import './AddRecipe.css';

export const AddRecipe = () => {
  return (
    <div className="addPage">
      <form action="" className="addForm">
        <>
          <label htmlFor="">Name: </label>
          <input type="text" placeholder="Name" />
        </>
        <>
          <label htmlFor="">Summary: </label>
          <input type="text" placeholder="Summary" />
        </>
        <>
          <label htmlFor="">Portion: </label>
          <input type="text" placeholder="Portion" />
        </>
        <>
          <label htmlFor="">Time: </label>
          <input type="text" placeholder="Time" />
        </>
        <>
          <label htmlFor="">Category: </label>
          <select name="" id="">
            <option value="food">Food</option>
            <option value="desert">Desert</option>
          </select>
        </>
        <>
          <label htmlFor="">Method: </label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Method"
          ></textarea>
        </>
        <button className="formAddRecipe">Add Recipe</button>
      </form>
    </div>
  );
};
