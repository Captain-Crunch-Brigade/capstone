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
  overflow:hidden;
`;

const CarouselDiv = styled.div`
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

const Carousel = function Carousel({
  relatedItems, outfit, isOutfit, setOutfit,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  let totalSlides = 0;
  if (relatedItems.id) {
    totalSlides = relatedItems.related_items.length - 1;
  } else if (outfit) {
    totalSlides = outfit.length - 1;
  }

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

  return (
    <Container data-testid="carousel">
      {currentSlide > 0 && <LeftButton data-testid="prevButton" onClick={handlePrev}>&laquo;</LeftButton>}
      <CarouselDiv ref={slideRef}>
        {relatedItems?.related_items
          ? relatedItems.related_items
            .map((item) => <Card id={item} key={item} />)
          : null }
        {outfit.length === 0 && isOutfit
          ? <EmptyCard outfit={outfit} setOutfit={setOutfit} />
          : outfit && outfit.map
          && outfit.map((item) => <Card id={(item)} key={item} isOutfit setOutfit={setOutfit} />)}
        {isOutfit ? <EmptyCard outfit={outfit} setOutfit={setOutfit} /> : null}
      </CarouselDiv>
      {currentSlide < totalSlides
      && <RightButton data-testid="nextButton" onClick={handleNext}>&raquo;</RightButton>}
    </Container>
  );
};

Carousel.propTypes = {
  relatedItems: PropTypes.shape({
    id: PropTypes.string,
    related_items: PropTypes.array,
  }),
  outfit: PropTypes.array,
  isOutfit: PropTypes.bool,
  setOutfit: PropTypes.func,
};

Carousel.defaultProps = {
  relatedItems: {
    id: null,
    related_items: [],
  },
  outfit: [],
  isOutfit: false,
  setOutfit: null,
};

export default Carousel;
