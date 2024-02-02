import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useRecipeContext();

  // Find the recipe with the matching ID from the global state
  const recipeDetails = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipeDetails) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-4">{recipeDetails.name} Details</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">{recipeDetails.name}</h2>
        <p className="text-gray-600 mb-4">{recipeDetails.description}</p>
        <div className="mb-4">
          <strong className="block text-gray-700 font-bold mb-2">Ingredients:</strong>
          <p>{recipeDetails.ingredients}</p>
        </div>
        <Link to="/" className="text-blue-500">Back to Recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
