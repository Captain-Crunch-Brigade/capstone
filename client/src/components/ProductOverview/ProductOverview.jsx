import React, { useState, useEffect } from 'react';
import Header from './Header';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import s from './style.css';
import axios from 'axios';

const ProductOverview = () => {
  const [gallery, setGallery] = useState({
    results: [
      {
        photos: [{}]
      }
    ]
  });
  const [productInfo, setProductInfo] = useState({});
  // const id = 65652;
  const id = Math.floor((Math.random() * 1010) + 65631)
  useEffect(() => {
    axios.get(`http://localhost:3000/api/styles/${id}`)
      .then(results => {
        let info = results.data[0];
        let style = results.data[2];

        setGallery(style);
        setProductInfo(info);
      })
  }, [])

  return (
    <>
      <Header />
      <div className={s.main}>
        <ImageGallery data={gallery} />
        <div className={s.aside}>
          <ProductInfo data={productInfo} />
          <StyleSelector />
          <AddToCart />
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
