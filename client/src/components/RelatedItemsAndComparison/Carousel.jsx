import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const CarouselDiv = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
`;

const Carousel = function Carousel({ relatedItems }) {
  return (
    <CarouselDiv>
      {relatedItems?.related_items
        ? relatedItems.related_items.map((item) => <Card id={item} key={item} />)
        : null }
    </CarouselDiv>
  );
};

Carousel.propTypes = {
  relatedItems: PropTypes.shape({
    id: PropTypes.number,
    related_items: PropTypes.array,
  }),
};

Carousel.defaultProps = {
  relatedItems: {
    id: null,
    related_items: [],
  },
};

export default Carousel;
