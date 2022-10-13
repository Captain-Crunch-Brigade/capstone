import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel';

const RelatedProducts = function RelatedItems() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/related_items/65631')
      .then((results) => {
        setData(results.data);
      });
  }, []);

  return (
    <div>
      RELATED PRODUCTS
      <Carousel data={data} />
    </div>
  );
};

export default RelatedProducts;
