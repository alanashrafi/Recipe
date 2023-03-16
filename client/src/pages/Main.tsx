import './Main.css';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipesContext } from '../Context';
import { Hero } from '../components/Hero';
import { useState } from 'react';

export const Main = () => {
  const result = useRecipesContext();
  const [search, setSearch] = useState<string>('');

  return (
    <main>
      <Hero />
      <section className="searchSection">
        <input
          type="text"
          placeholder="Search Recipe"
          className="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="searchButton">Search</button>
      </section>
      <section className="recipes">
        {result
          ?.filter((recipe) => {
            if (search === '') {
              return true;
            }
            return search;
          })
          .map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
      </section>
    </main>
  );
};
