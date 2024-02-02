import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';
import EditRecipe from './pages/EditRecipe';
import "../src/pages/Home.css"

const App = () => {
  return (
    <Router>
     

      <div>
     
      <RecipeProvider>
        <NavBar />
        <ul className="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
        
        <Routes >
          <Route cla path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
         
        </Routes>
        
        
      </RecipeProvider>
      </div>
    </Router>
  );
};

export default App;





