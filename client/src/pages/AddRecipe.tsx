import React, { useEffect, useState } from 'react';
import { Irecipes } from '../types';
import './AddRecipe.css';

// {
//   id: 0,
//   name: '',
//   summary: '',
//   portion: '',
//   time: '',
//   imageUrl: '',
//   category: '',
//   method: '',
// }

export const AddRecipe = () => {
  const [newRecipe, setNewRecipe] = useState<Irecipes>({} as Irecipes);

  useEffect(() => {});
  console.log(newRecipe);
  const handleOnChange = (e: any) => {
    const { value, name } = e.target;
    setNewRecipe((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="addPage">
      <form action="" className="addForm">
        <>
          <input
            type="text"
            placeholder="Name"
            value={newRecipe?.name}
            name="name"
            onChange={handleOnChange}
          />
        </>
        <>
          <input
            type="text"
            placeholder="Summary"
            value={newRecipe?.summary}
            name="summary"
            onChange={handleOnChange}
          />
        </>
        <>
          <input
            type="text"
            placeholder="Portion"
            value={newRecipe?.portion}
            name="portion"
            onChange={handleOnChange}
          />
        </>
        <>
          <input
            type="text"
            placeholder="Time"
            value={newRecipe?.time}
            name="time"
            onChange={handleOnChange}
          />
        </>
        <>
          <select
            name="category"
            id=""
            value={newRecipe?.category}
            onChange={handleOnChange}
          >
            <option value="">Categor</option>
            <option value="food">Food</option>
            <option value="desert">Desert</option>
          </select>
        </>
        <>
          <textarea
            name="method"
            id=""
            cols={30}
            rows={10}
            placeholder="Method"
            value={newRecipe?.method}
            onChange={handleOnChange}
          ></textarea>
        </>
        <button className="formAddRecipe">Add Recipe</button>
      </form>
    </div>
  );
};
