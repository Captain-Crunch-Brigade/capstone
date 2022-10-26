import React, { useState, useEffect } from 'react';
import Header from './Header';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import { getAverageStars, getStarsByQuarter } from '../../lib/starRatings';
import s from './style.css';
import axios from 'axios';

const ProductOverview = () => {
  const [data, setData] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const id = Math.floor((Math.random() * 1011) + 65631);

  useEffect(() => {
    axios.get(`/api/styles/${id}`)
    .then(results => {
        setData(
          results.data[2].results
        );
        setProductInfo({
          name: results.data[0].name,
          category: results.data[0].category,
          price: results.data[2].results[0].original_price,
          sale_price: results.data[2].results[0].sale_price,
          ratings: getStarsByQuarter(getAverageStars(results.data[1]), 10)
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className={s.main}>
        <ImageGallery gallery={data} />
        <div className={s.aside}>
          <ProductInfo productInfo={productInfo} />
          <StyleSelector selector={data} />
          <AddToCart cart={data}/>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
