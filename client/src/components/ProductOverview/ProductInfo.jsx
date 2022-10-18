import React from 'react';
import s from './style.css';

const ProductInfo = ({ productInfo }) => {
  return (
    <div id={s.info}>
      <p>
        <span>&#9733;&#9733;&#9733;&#9733;&#9733; </span>
        <a href="#"><small>Read all reviews</small></a>
      </p>
      <p>{productInfo.category}</p>
      <h2>{productInfo.name}</h2>
      <p>${productInfo.price}</p>
    </div>
  )
}

export default ProductInfo;