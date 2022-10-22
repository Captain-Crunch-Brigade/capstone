/* eslint-disable no-nested-ternary */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';
import EmptyCard from './EmptyCard';

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

const Carousel = function Carousel({ relatedItems, outfit, isOutfit }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = relatedItems ? relatedItems.related_items.length - 1
    : outfit ? outfit.length - 1 : 0;

  const handlePrev = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? 0 : currentSlide - 1;
    setCurrentSlide(newIndex);
    if (!isFirstSlide) {
      slideRef.current.scrollLeft -= slideRef.current.offsetWidth / 4;
    }
  };

  const handleNext = () => {
    const isLastSlide = currentSlide >= totalSlides;
    const newIndex = isLastSlide ? totalSlides : currentSlide + 1;
    setCurrentSlide(newIndex);
    if (!isLastSlide) {
      slideRef.current.scrollLeft += slideRef.current.offsetWidth / 4;
    }
  };

  // const outfitMap = outfit && outfit.map((item) => <Card id={item} key={item} />);
  return (
    <Container>
      {currentSlide > 0 && <LeftButton data-testid="prevButton" onClick={handlePrev}>&laquo;</LeftButton>}
      <CarouselDiv ref={slideRef}>
        {relatedItems?.related_items
          ? relatedItems.related_items
            .map((item) => <Card id={item} key={item} />)
          : null }
        {outfit.length === 0
          ? <EmptyCard outfit={outfit} />
          : outfit && outfit.map
          && outfit.map((item) => <Card id={item} key={item} />)}
        {isOutfit ? <EmptyCard outfit={outfit} /> : null}
      </CarouselDiv>
      {currentSlide < totalSlides
      && <RightButton data-testid="nextButton" onClick={handleNext}>&raquo;</RightButton>}
    </Container>
  );
};

Carousel.propTypes = {
  relatedItems: PropTypes.shape({
    id: PropTypes.number,
    related_items: PropTypes.array,
  }),
  outfit: PropTypes.array,
  isOutfit: PropTypes.bool,
};

Carousel.defaultProps = {
  relatedItems: {
    id: null,
    related_items: [],
  },
  outfit: [],
  isOutfit: false,
};

export default Carousel;
