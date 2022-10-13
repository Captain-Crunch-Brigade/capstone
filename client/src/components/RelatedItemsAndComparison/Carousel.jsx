import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CarouselDiv = styled.div`
  border: 1px solid black;
  border-radius: 3px;
`;

const Carousel = function Carousel() {
  return (
    <CarouselDiv>
      <Card />
      <Card />
    </CarouselDiv>
  );
};

export default Carousel;
