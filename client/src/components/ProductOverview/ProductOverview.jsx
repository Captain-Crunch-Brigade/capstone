import React, { useState, useEffect } from 'react';
import Header from './Header';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import s from './style.css';
import axios from 'axios';

const ProductOverview = () => {
  const [styleInfo, setStyleInfo] = useState({});
  const [productInfo, setProductInfo] = useState({});
  // const id = 65633;
  const id = Math.floor((Math.random() * 1011) + 65631)
  useEffect(() => {
    axios.get(`/api/styles/${id}`)
      .then(results => {
        setStyleInfo({
          imgUrl: results.data[2].results[0].photos[0].url,
        });
        setProductInfo({
          name: results.data[0].name,
          category: results.data[0].category,
          price: results.data[2].results[0].original_price
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className={s.main}>
        <ImageGallery styleInfo={styleInfo} />
        <div className={s.aside}>
          <ProductInfo productInfo={productInfo} />
          <StyleSelector />
          <AddToCart />
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
