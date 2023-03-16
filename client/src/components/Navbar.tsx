import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [colorChange, setColorchange] = useState('transparent');
  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorchange('white');
    } else {
      setColorchange('transparent');
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <nav
      style={{
        backgroundColor: colorChange,
        transition: 'all 300ms ease-in-out',
      }}
    >
      <div className="nav__left">
        <Link to="/">
          <div className="nav__logo">
            <span>Easy</span>Recipes
          </div>
        </Link>
        <ul className="nav__link">
          <Link to="/foods">
            <li>Food</li>
          </Link>
          <Link to="/desserts">
            <li>Dessert</li>
          </Link>
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
