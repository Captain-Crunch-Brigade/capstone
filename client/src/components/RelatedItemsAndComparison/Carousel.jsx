import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 450px;
  display: flex;
  flex-direction: row;
  border: 1px solid blue;
  overflow:hidden;
`;

const CarouselDiv = styled.div`
  border: 1px solid black;
  width: 95%;
  margin: auto;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  transition: all 250ms linear;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Button = styled.button`
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  color: grey;
  line-height: 424px;
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
  background-color: transparent;
  border-color: transparent;
`;

const LeftButton = styled(Button)`
  left: 0;
`;

const RightButton = styled(Button)`
  right: 0;
`;

const Carousel = function Carousel({ relatedItems }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = relatedItems.related_items.length - 1;

  const handlePrev = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? 0 : currentSlide - 1;
    if (!isFirstSlide) {
      slideRef.current.scrollLeft -= slideRef.current.offsedWidth / 4;
    }
    setCurrentSlide(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentSlide >= totalSlides;
    const newIndex = isLastSlide ? totalSlides : currentSlide + 1;
    if (!isLastSlide) {
      slideRef.current.scrollLeft += slideRef.current.offsetWidth / 4;
    }
    setCurrentSlide(newIndex);
  };

  return (
    <Container>
      {currentSlide > 0 && <LeftButton onClick={handlePrev}>&laquo;</LeftButton>}
      <CarouselDiv ref={slideRef}>
        {relatedItems?.related_items
          ? relatedItems.related_items
            .map((item) => <Card id={item} key={item} />)
          : null }
      </CarouselDiv>
      {currentSlide < totalSlides
      && <RightButton onClick={handleNext}>&raquo;</RightButton>}
    </Container>
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
