import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getAverageStars, getStarsByQuarter } from '../../lib/starRatings';

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid grey;
  margin: 10px 20px 10px 10px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-bottom: 1px solid grey;
`;

const Category = styled.div`
  font-size: 12px;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 10px;
`;

const Stars = styled.div`
  font-size: 10px;
`;

const Card = function Card({ id }) {
  const [data, setData] = useState({
    name: '',
    category: '',
    price: 0,
    ratings: null,
    thumbnails: [],
  });

  useEffect(() => {
    axios.get(`/api/related_items/${id}/info`)
      .then((results) => {
        setData((prev) => ({
          ...prev,
          name: results.data[0].name,
          category: results.data[0].category,
          price: parseInt(results.data[0].default_price, 10),
          ratings: getStarsByQuarter(getAverageStars(results.data[2]), 10),
          thumbnails: results.data[3].results,
        }));
      });
  }, [id]);

  return (
    <Wrapper>
      <Image src={data.thumbnails[0]?.photos[0]?.thumbnail_url} />
      <Category>{data.category}</Category>
      <Name>{data.name}</Name>
      <Price>{`$${data.price}`}</Price>
      {/* TODO: Add star components given data.ratings */}
      <Stars>{data.ratings}</Stars>
    </Wrapper>
  );
};

Card.propTypes = {
  id: PropTypes.number,
};

Card.defaultProps = {
  id: null,
};

export default Card;
