import React from 'react';
import './AddRecipe.css';

export const AddRecipe = () => {
  return (
    <div className="addPage">
      <form action="" className="addForm">
        <>
          <label htmlFor="">Title: </label>
          <input type="text" placeholder="Title" />
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
