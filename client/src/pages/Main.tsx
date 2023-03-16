import './Main.css';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipesContext } from '../Context';
import { Hero } from '../components/Hero';

export const Main = () => {
  const result = useRecipesContext();
  console.log('result in main', result);
  return (
    <main>
      <Hero />
      <section className="searchSection">
        <input
          type="text"
          placeholder="Search Recipe"
          className="searchInput"
        />
        <button className="searchButton">Search</button>
      </section>
      <section className="recipes">
        {result?.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </section>
    </main>
  );
};
