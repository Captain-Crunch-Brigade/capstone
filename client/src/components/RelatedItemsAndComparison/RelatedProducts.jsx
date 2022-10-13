import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';

const RelatedProducts = function RelatedItems() {
  const { id } = useParams();
  const [data, setData] = useState({
    id: null,
    related_items: [],
  });

  useEffect(() => {
    axios.get(`/api/related_items/${id}`)
      .then((results) => {
        setData((prev) => ({
          ...prev,
          id: parseInt(id, 10),
          related_items: results.data,
        }));
      });
  }, []);

  return (
    <div>
      RELATED PRODUCTS
      <Carousel relatedItems={data} />
    </div>
  );
};

export default RelatedProducts;
