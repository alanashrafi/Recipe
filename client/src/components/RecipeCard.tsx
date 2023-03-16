import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';
import { Irecipes } from '../types';
type Props = {
  recipe: Irecipes;
};
export const RecipeCard: FC<Props> = (props) => {
  return (
    <Link to={`/details/${props.recipe.id}`}>
      <div className="recipeCardContainer">
        <article className="recipeCard">
          <figure
            className="recipeCard__image"
            style={{ backgroundImage: `url(${props.recipe.imageUrl})` }}
          />
          <div className="recipeCard__main">
            <h2 className="recipeCard__main__title">{props.recipe.name}</h2>
            <p className="recipeCard__main__detail">{props.recipe.summary}</p>
            <div className="recipeCard__main__footer">
              <div className="recipeCard__main__footer__portion">
                <h4>Portion</h4>
                <p>{props.recipe.portion} person</p>
              </div>
              <div className="recipeCard__main__footer__time">
                <h4>Time</h4>
                <p>{props.recipe.time} minutes</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
};
