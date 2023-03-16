import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipesContext } from '../Context';
import './Details.css';

export const Details = () => {
  // const recipe = useRecipesContext();
  // const id = useParams().id; //string
  // console.log('id in details', typeof id);
  // console.log('recipe', typeof recipe?.at(0)?.id);
  // const result = recipe?.find((id) => id.id === Number(id));
  // console.log(result);
  return (
    <div className="detailContainer">
      <div className="detail__header">
        {/* <h2>{result?.name}</h2>
        <h4>{result?.summary}</h4>
        <img src={result?.imageUrl} alt="" className="detailImg" /> */}
      </div>
    </div>
  );
};
