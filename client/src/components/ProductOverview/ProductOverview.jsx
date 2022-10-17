import React, { useState, useEffect } from 'react';
import Header from './Header';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import s from './style.css';
import axios from 'axios';

const ProductOverview = () => {
  // const [gallery, setGallery = useState({})
  const id = 65631;
  useEffect(() => {
    axios.get(`/api/styles/${id}`)
      .then(results => {
        console.log(results)
      })
  }, [])

  return (
    <>
      <Header />
      <div className={s.main}>
        <ImageGallery />
        <div className={s.aside}>
          <ProductInfo />
          <StyleSelector />
          <AddToCart />
        </div>
      </div >
    </>
  );
};

export default ProductOverview;
