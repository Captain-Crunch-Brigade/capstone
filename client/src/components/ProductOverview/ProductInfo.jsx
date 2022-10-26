import React from 'react';
import Stars from '../Stars';
import s from './style.css';

const ProductInfo = ({ productInfo }) => {
  return (
    <div id={s.info}>
      {
        productInfo.ratings ?
        <>
        <Stars id={s.stars} ratings={productInfo.ratings} />
        <a href="#"><small>Read all reviews</small></a>
        </>
      :
      null
    }

      <h4>Caregory: {productInfo.category}</h4>
      <h2>{productInfo.name}</h2>
      {
        productInfo.sale_price ?
        <>
        <p className={s.strike}>${productInfo.price}</p>
            <p className={s.sale}>${productInfo.sale_price}</p>
        </>
        :
        <p>${productInfo.price}</p>

      }
      <div id={s.socialMedia}>
        <a href="#" className={`fa fa-facebook ${s.fa} ${s.fa_facebook}`}></a>
        <a href="#" className={`fa fa-twitter ${s.fa} ${s.fa_twitter}`}></a>
        <a href="#" className={`fa fa-pinterest ${s.fa} ${s.fa_pinterest}`}></a>
      </div>
    </div >
  )
}

export default ProductInfo;