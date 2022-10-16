import React from 'react';
import s from './style.css';
import axios from 'axios'

const ImageGallery = ({ data }) => {
  const bgImg = {
    backgroundImage: `url(${data.results[0].photos[0].url})`,
    backgroundSize: '100% 100%'
  }
  return (
    <div id={s.gallery} style={bgImg}>


    </div>
  )
}

export default ImageGallery;