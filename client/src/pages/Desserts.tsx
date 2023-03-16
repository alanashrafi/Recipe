import React from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipesContext } from '../Context';
import './Desserts.css';

export const Desserts = () => {
  const desserts = useRecipesContext();

  console.log(desserts);
  return (
    <div className="dessert__main">
      <div className="dessert__header"></div>
      <div className="dessert__recipes">
        {desserts
          ?.filter((recipe) => recipe.category === 'dessert')
          .map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
      </div>
    </div>
  );
};
