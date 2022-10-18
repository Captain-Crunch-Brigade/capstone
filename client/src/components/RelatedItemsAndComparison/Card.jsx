import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getAverageStars, getStarsByQuarter } from '../../lib/starRatings';
import Comparison from './Comparison';
import Stars from '../Stars';

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid grey;
  margin: 10px 20px 10px 10px;
  background-color: #bcbcbc;
  position: relative;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  vertical-align: middle;
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

const Star = styled.div`
  font-size: 25px;
  font-family: Times;
  z-index: 100;
  position: absolute;
  right: 0;
`;

const Card = function Card({ id }) {
  const [data, setData] = useState({
    name: '',
    category: '',
    defaultPrice: 0,
    salePrice: 0,
    ratings: null,
    thumbnails: [],
    features: [],
  });
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/related_items/${id}/info`)
      .then((results) => {
        setData((prev) => ({
          ...prev,
          name: results.data[0].name,
          category: results.data[0].category,
          defaultPrice: parseInt(results.data[0].default_price, 10),
          ratings: getStarsByQuarter(getAverageStars(results.data[2]), 10),
          thumbnails: results.data[3].results,
          features: results.data[0].features,
        }));
      });
  }, [id]);

  const navigateToProductId = () => {
    navigate(`/products/${id}`);
    navigate(0);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <Image onClick={navigateToProductId} src={data.thumbnails[0]?.photos[0]?.thumbnail_url} />
      <Star onClick={showModal}>☆</Star>
      {modalOpen && <Comparison setModalOpen={setModalOpen} data={data} compareId={id} />}
      <Category>{data.category}</Category>
      <Name>{data.name}</Name>
      <Price>{`$${data.price}`}</Price>
      <Stars ratings={data.ratings} />
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
