import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer__left">
        <p>© Copyright EasyRecipes 2023</p>
      </div>
      <div className="footer__right">
        <img src="instagram.png" alt="instagram logo" />
        <img src="facebook.png" alt="facebook logo" />
        <img src="twitter.png" alt="twitter logo" />
        <img src="linkedin.png" alt="linkedin logo" />
      </div>
    </footer>
  );
};
