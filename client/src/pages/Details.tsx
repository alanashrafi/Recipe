import React, { SyntheticEvent } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipesContext } from '../Context';
import './Details.css';
// type Props = {
//   recipe: Irecipes;
// };
export const Details = () => {
  const recipes = useRecipesContext();
  const navigate = useNavigate();
  const id = useParams().id; //string
  console.log('param id in details', typeof id);
  console.log('userecipecontest', recipes);
  const result = recipes?.find((recipe) => recipe.id === Number(id));
  console.log('result in details', result);
  const deleteRecipe = (e: SyntheticEvent) => {
    e.preventDefault();
    fetch(`http://localhost:5127/api/recipes/${id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };
  return (
    <div className="detailContainer">
      <div className="detail__header">
        <h2 className="detail__header__title">{result?.name}</h2>
        <h3>{result?.summary}</h3>
        <img src={result?.imageUrl} alt="" className="detailImg" />
      </div>
      <div className="detail__main">
        <section className="detail__main__left">
          <h3 className="detail__main__titles">Portion</h3>
          <h4>{result?.portion} person</h4>
          <h3 className="detail__main__titles">Time</h3>
          <h4>{result?.time} minutes</h4>
        </section>
        <section className="detail__main__right">
          <h2 className="detail__main__titles">Method</h2>
          <h4 className="detail__main__method">{result?.method}</h4>
        </section>
      </div>
      <div className="detail__footer">
        <Link to={`edit`} relative="path">
          <button className="editButton">Edit Recipe</button>
        </Link>
        <button className="deleteButton" onClick={deleteRecipe}>
          Delete Recipe
        </button>
      </div>
    </div>
  );
};
