import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';
import './Home.css';

const Home = () => {
  const { recipes, deleteRecipe } = useRecipeContext();

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete the recipe?');
    if (isConfirmed) {
      // Use the context function to delete the recipe
      deleteRecipe(id);
    }
  };

  return (
    <div className="container mx-auto mt-20 px-4 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Delicious Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="home-container bg-white p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 overflow-hidden"
          >
            <h2 className="text-4xl font-bold mb-4">{recipe.name}</h2>
            <div>
              <h3 className="text-lg font-semi mb-2">Ingredients:</h3>
              <p className="text-gray-600 mb-2">{recipe.ingredients}</p>
            </div>
            <div>
              <h3 className="text-lg semi">Description:</h3>
              <p className="text-gray-600 mb-6">{recipe.description}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 font-bold transition duration-300 hover:underline"
              >
                View Details
              </Link>
              <div className="space-x-4">
                <button
                  onClick={() => handleDelete(recipe.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
                <Link to={`/edit/${recipe.id}`} className="text-green-500 hover:underline">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

