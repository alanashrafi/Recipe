import React from 'react';
import './Details.css';

export const Details = () => {
  return (
    <div className="detailContainer">
      <div className="detail__header">
        <h2>Recipe 1</h2>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequuntur, ab.
        </h4>
        <img src="food23.jpg" alt="" className="detailImg" />
      </div>
    </div>
  );
};
