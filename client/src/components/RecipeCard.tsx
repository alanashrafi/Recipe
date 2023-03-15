import React from 'react';
import './RecipeCard.css';

export const RecipeCard = () => {
  return (
    <div className="recipeCardContainer">
      <article className="recipeCard">
        <figure className="recipeCard__image" />
        <div className="recipeCard__main">
          <h2 className="recipeCard__main__title">Recipe 1</h2>
          <p className="recipeCard__main__detail">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            doloremque.
          </p>
          <div className="recipeCard__main__footer">
            <div className="recipeCard__main__footer__portion">
              <p>portion</p>
              <p>4 persons</p>
            </div>
            <div className="recipeCard__main__footer__time">
              <p>Time</p>
              <p>15 min</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
