import React from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipesContext } from '../Context';
import './Foods.css';

export const Foods = () => {
  const desserts = useRecipesContext();

  console.log(desserts);
  return (
    <div className="food__main">
      <div className="food__header"></div>
      <div className="food__recipes">
        {desserts
          ?.filter((recipe) => recipe.category === 'food')
          .map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
      </div>
    </div>
  );
};
