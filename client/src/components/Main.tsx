import React from 'react';
import { Header } from './Header';
import './Main.css';
import { RecipeCard } from './RecipeCard';

export const Main = () => {
  return (
    <main>
      <div className="recipes">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>

      <section>
        <input
          type="text"
          placeholder="Search Recipe"
          className="searchInput"
        />
        <button className="searchButton">Search</button>
      </section>
      <section className="recipes">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </section>
    </main>
  );
};
