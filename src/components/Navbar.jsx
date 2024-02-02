import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className="bg-opacity-75 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-4xl font-bold">Recipe App</Link>

        <div className="space-x-4">
          <Link to="/add" className="text-black">Add a Recipe</Link>
          <button onClick={handleRefresh} className="text-white">Refresh Page</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

