import React, { useState } from 'react';
import Header from './Header';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import s from './style.css';

const ProductOverview = () => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <Header />

      {
        expand ?
          <div className={s.expand}>
            <ImageGallery />
          </div>
          :
          <div className={s.main}>
            <ImageGallery />
            <div className={s.aside}>
              <ProductInfo />
              <StyleSelector />
              <AddToCart />
            </div>
          </div >

      }
    </>
  );
};

export default ProductOverview;
