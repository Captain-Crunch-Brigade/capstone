import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

const YourOutfit = function YourOutfit() {
  const [outfit, setOutfit] = useState(localStorage.getItem('outfit') || []);

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
    <div>
      YOUR OUTFIT
      <Carousel outfit={outfit} isOutfit />
    </div>
  );
};

export default YourOutfit;
