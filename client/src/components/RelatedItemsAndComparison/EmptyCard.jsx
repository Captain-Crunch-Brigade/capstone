import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid grey;
  margin: 10px 20px 10px 10px;
  background-color: #bcbcbc;
  position: relative;
`;

const Plus = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
`;

const EmptyCard = function EmptyCard({ outfit }) {
  const { id } = useParams();

  const handleClick = () => {
    if (!outfit.includes(id)) {
      outfit.push(id);
      localStorage.setItem('outfit', JSON.stringify(outfit));
    }
  };

  return (
    <Wrapper>
      <Plus onClick={handleClick}>
        +
      </Plus>
    </Wrapper>
  );
};

EmptyCard.propTypes = {
  outfit: PropTypes.array,
};

EmptyCard.defaultProps = {
  outfit: [],
};

export default EmptyCard;
