import React from 'react';
import { Navbar } from './Navbar';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <h2 className="header__title">
        Best <span>Recipes</span>
        <h3>Lets Start</h3>
        <h3>Cooking</h3>
      </h2>
    </div>
  );
};
