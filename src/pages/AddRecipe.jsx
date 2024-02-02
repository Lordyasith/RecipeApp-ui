import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const AddRecipe = () => {

  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    description: '',
  });

  const { addRecipe } = useRecipeContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: generateUniqueId(),
      name: recipe.name,
      ingredients: recipe.ingredients,
      description: recipe.description,
    };

    // Use the context function to add the new recipe
    console.log(newRecipe);
    addRecipe(newRecipe);
    navigate("/")
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto bg-white max-w-md  p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Recipe Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save Recipe</button>
            <Link to="/" className="text-blue-500">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;

