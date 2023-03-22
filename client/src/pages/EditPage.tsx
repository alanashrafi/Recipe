import React, { SyntheticEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipesContext, UserefreshContext } from '../Context';
import { Irecipes } from '../types';
import './EditPage.css';

export const EditPage = () => {
  const recipes = useRecipesContext();
  const id = useParams().id;
  const result = recipes?.find((recipe) => recipe.id === Number(id));
  const [newRecipe, setNewRecipe] = useState<Irecipes>(result as Irecipes);
  const updatePage = UserefreshContext();
  const navigate = useNavigate();
  console.log('id from edit page', id);

  const edit = (e: SyntheticEvent) => {
    e.preventDefault();
    fetch(`https://recipe.azurewebsites.net/api/recipes/${id}/edit`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    }).then(() => {
      updatePage('updated');
      navigate('/');
    });
  };
  const handleOnChange = (e: any) => {
    const { value, name } = e.target;
    setNewRecipe((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="editPage">
      <form action="" className="editForm" onSubmit={edit}>
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
            <option value="">Category</option>
            <option value="food">Food</option>
            <option value="dessert">Dessert</option>
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
        <>
          <input
            type="text"
            placeholder="Image Url"
            value={newRecipe?.imageUrl}
            name="imageUrl"
            onChange={handleOnChange}
          />
        </>

        <button className="formEditRecipe">Edit Recipe</button>
      </form>
    </div>
  );
};
