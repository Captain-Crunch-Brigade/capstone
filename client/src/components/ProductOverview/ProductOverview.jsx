import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import Description from './Description';
import { getAverageStars, getStarsByQuarter } from '../../lib/starRatings';
import s from './style.css';

const ProductOverview = function ProductOverview() {
  const [data, setData] = useState([]);
  const [styleId, setStyleId] = useState();
  const [productInfo, setProductInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/styles/${id}`)
      .then((results) => {
        setData(
          results.data[2].results,
        );
        setProductInfo({
          name: results.data[0].name,
          slogan: results.data[0].slogan,
          description: results.data[0].description,
          category: results.data[0].category,
          price: results.data[2].results[0].original_price,
          sale_price: results.data[2].results[0].sale_price,
          ratings: getStarsByQuarter(getAverageStars(results.data[1]), 10)
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    setStyleId(id);
  }

  return (
    <>
      <Header />
      <div className={s.main}>
        <ImageGallery gallery={data} styleId={styleId} styleClick={handleClick} />
        <div className={s.aside}>
          <ProductInfo productInfo={productInfo} />
          <StyleSelector selector={data} styleId={styleId} styleClick={handleClick} />
          <AddToCart cart={data} />
        </div>
      </div>
      <Description desc={productInfo} />
    </>
  );
};

export default ProductOverview;
