import React from 'react';
import s from './style.css';

const ProductInfo = ({ data }) => {
  console.log(data.name)

  return (
    <div id={s.info}>
      <p>
        <span>&#9733;&#9733;&#9733;&#9733;&#9733; </span>
        <a href="#"><small>Read all reviews</small></a>
      </p>
      <p>{data.category}</p>
      <h2>{data.name}</h2>
      <p>${data.default_price}</p>
    </div>
  )
}

export default ProductInfo;