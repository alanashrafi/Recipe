import React from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipesContext } from '../Context';
import './Foods.css';

export const Foods = () => {
  const desserts = useRecipesContext();

  console.log(desserts);
  return (
    <div className="dessert__main">
      <div className="dessert__header"></div>
      <div className="recipes">
        {desserts
          ?.filter((recipe) => recipe.category === 'food')
          .map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
      </div>
    </div>
  );
};
