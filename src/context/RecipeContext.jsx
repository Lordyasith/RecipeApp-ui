import { createContext, useContext, useEffect, useState } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  // Load recipes from localStorage on component mount
  const initialRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const [recipes, setRecipes] = useState(initialRecipes);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  // Save recipes to localStorage whenever the recipes state changes
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export { RecipeProvider, useRecipeContext };

