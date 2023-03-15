import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div className="nav__left">
        <Link to="/">
          <div className="nav__logo">
            <span>Easy</span>Recipes
          </div>
        </Link>
        <ul className="nav__link">
          <li>Food</li>
          <li>Desert</li>
        </ul>
      </div>
      <div className="nav__right">
        {/* <Link to={'/addRecipe'}>
          <button className="addRecipe">Add Recipe</button>
        </Link> */}
        <Link to="/addRecipe">
          <button className="addRecipe">Add Recipe</button>
        </Link>

        <button className="signInButton">Sign In</button>
        <button className="signUpButton">Sign Up</button>
      </div>
    </nav>
  );
};
