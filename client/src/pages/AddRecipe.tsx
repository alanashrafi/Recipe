import React, {
  MutableRefObject,
  SyntheticEvent,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserefreshContext } from '../Context';
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
  // const [updated, setUpdated] = useState('');
  const navigate = useNavigate();
  const errorMessage = useRef() as MutableRefObject<HTMLDivElement>;
  const isEmpty = Object.values(newRecipe).every((x) => x === null || x === '');
  const updatePage = UserefreshContext();
  const add = (e: SyntheticEvent) => {
    e.preventDefault();
    if (isEmpty) {
      errorMessage.current.className = 'errorMessage';
      setTimeout(() => {
        errorMessage.current.className = 'hide';
      }, 2000);
      return;
    }
    fetch('http://localhost:5127/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newRecipe),
    }).then(() => {
      updatePage('Post successfull');
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
    <div className="addPage">
      <form action="" className="addForm" onSubmit={add}>
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
        <div className="addRecipeFooter">
          <button className="formBackRecipe" onClick={() => navigate('/')}>
            Back
          </button>
          <button className="formAddRecipe">Add Recipe</button>
        </div>
      </form>
      <div ref={errorMessage} className="hide">
        <p>Please Fill Out The Form</p>
      </div>
    </div>
  );
};
