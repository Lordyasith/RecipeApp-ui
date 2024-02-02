import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';

const EditRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { recipes, editRecipe } = useRecipeContext();

  // Find the existing recipe based on the id
  const existingRecipe = recipes.find(recipe => recipe.id === parseInt(id));

  // Use state to manage the form fields
  const [editedRecipe, setEditedRecipe] = useState({
    id: parseInt(id),
    name: '',
    ingredients: '',
    description: '',
  });

  useEffect(() => {
    // Pre-fill the form fields with existing recipe details
    if (existingRecipe) {
      setEditedRecipe(existingRecipe);
    }
  }, [existingRecipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the edited recipe
    console.log('Recipe edited:', editedRecipe);

    // Update the recipe in the global state
    editRecipe(editedRecipe);

    // Redirect to the recipe details page after editing
    navigate('/');
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Edit Recipe</h1>
        <form onSubmit={handleSubmit}>
          {/* Form fields with pre-filled values */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Recipe Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedRecipe.name}
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
              value={editedRecipe.ingredients}
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
              value={editedRecipe.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
            <Link to={`/recipe/${id}`} className="text-blue-500">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;



