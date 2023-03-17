import { useState, useEffect, createContext, useContext } from 'react';
import { fetchApi } from './util/fetchApi';

interface Irecipes {
  id: Number;
  name: string;
  summary: string;
  portion: string;
  time: string;
  imageUrl: string;
  category: string;
  method: string;
}
const RecipesContext = createContext<Irecipes[] | null>(null);
const RefreshPageContext = createContext<any>('');
export const Context = ({ children }: any) => {
  const [recipes, setrecipes] = useState<Irecipes[] | null>([
    {
      id: 0,
      name: '',
      summary: '',
      portion: '',
      time: '',
      imageUrl: '',
      category: '',
      method: '',
    },
  ]);
  const [updated, setUpdated] = useState('');
  const UpdatePage = (str: string) => {
    setUpdated(str);
  };

  //console.log('recipes in context', recipes);
  useEffect(() => {
    fetchApi('http://localhost:5127/api/recipes/').then((data) =>
      setrecipes(data.$values)
    );
  }, [updated]);
  // ('Dispatch<SetStateAction<undefined>>');
  return (
    <RecipesContext.Provider value={recipes}>
      <RefreshPageContext.Provider value={UpdatePage}>
        {children}
      </RefreshPageContext.Provider>
    </RecipesContext.Provider>
  );
};
export const useRecipesContext = () => useContext(RecipesContext);
export const UserefreshContext = () => useContext(RefreshPageContext);
