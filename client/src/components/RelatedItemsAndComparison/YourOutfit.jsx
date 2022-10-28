import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const Wrapper = styled.div`
  margin: 30px 0 0 0;
`;

const Word = styled.h4`
  margin-left: 11%;
`;

const YourOutfit = function YourOutfit() {
  const [outfit, setOutfit] = useState(JSON.parse(localStorage.getItem('outfit')) || []);

  useEffect(() => {
    let storageArr = localStorage.getItem('outfit');

    if (storageArr === null) {
      storageArr = [];
    } else {
      storageArr = JSON.parse(storageArr);
    }

    setOutfit(storageArr);
  }, []);

  return (
    <Wrapper>
      <Word>
        YOUR OUTFIT
      </Word>
      <Carousel outfit={outfit} isOutfit setOutfit={setOutfit} />
    </Wrapper>
  );
};

export default YourOutfit;
