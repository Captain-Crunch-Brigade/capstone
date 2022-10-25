import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';

const Wrapper = styled.div`
  margin: 40px 0 0 0;
`;

const Word = styled.p`
  margin-left: 11%;
`;

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
          id,
          related_items: results.data,
        }));
      });
  }, []);

  return (
    <Wrapper>
      <Word>
        RELATED PRODUCTS
      </Word>
      <Carousel relatedItems={data} />
    </Wrapper>
  );
};

export default RelatedProducts;
