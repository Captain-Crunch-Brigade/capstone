import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getAverageStars, getStarsByQuarter } from '../../lib/starRatings';
import Comparison from './Comparison';
import Stars from '../Stars';
import CloseBtn from '../../assets/images/CloseBtn';

const Wrapper = styled.div`
  min-width: 20%;
  max-width: 20%;
  height: 400px;
  border: 1px solid grey;
  margin: 10px 10px 10px 10px;
  background-color: #f0f0f5;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  vertical-align: middle;
  border-bottom: 1px solid grey;
  background-color: white;
`;

const Category = styled.div`
  font-size: 14px;
  font-family: 'Archivo', sans-serif;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Archivo', sans-serif;
`;

const Price = styled.div`
  font-size: 14px;
`;

const Star = styled.div`
  font-size: 25px;
  font-family: Times;
  z-index: 100;
  position: absolute;
  right: 0;
`;

const Cross = styled.div`
  font-size: 25px;
  font-family: Times;
  z-index: 100;
  position: absolute;
  right: 0;
`;

const Card = function Card({ id, isOutfit, setOutfit }) {
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

  const removeOutfit = () => {
    const arr = JSON.parse(localStorage.getItem('outfit'));
    const idx = arr.indexOf(id);
    arr.splice(idx, 1);
    localStorage.setItem('outfit', JSON.stringify(arr));
    setOutfit(arr);
  };

  return (
    <Wrapper data-testid="card">
      <Image onClick={navigateToProductId} src={data.thumbnails[0]?.photos[0]?.thumbnail_url} />
      {isOutfit
        ? <Cross onClick={removeOutfit}><CloseBtn>X</CloseBtn></Cross>
        : <Star onClick={showModal}>???</Star>}
      {modalOpen && <Comparison setModalOpen={setModalOpen} data={data} compareId={id} />}
      <Category>{data.category}</Category>
      <Name>{data.name}</Name>
      <Price>{`$${data.defaultPrice}`}</Price>
      <Stars ratings={data.ratings} />
    </Wrapper>
  );
};

Card.propTypes = {
  id: PropTypes.any,
  isOutfit: PropTypes.bool,
  setOutfit: PropTypes.func,
};

Card.defaultProps = {
  id: null,
  isOutfit: false,
  setOutfit: null,
};

export default Card;
