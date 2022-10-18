import React from 'react';
import Thumbnails from './Thumbnails'
import s from './style.css';
import axios from 'axios'

const ImageGallery = ({ styleInfo }) => {
  const bgImg = {
    backgroundImage: `url(${styleInfo.imgUrl})`,
    backgroundSize: '100% 100%'
  }
  return (
    <div id={s.gallery} style={bgImg}>
      <div id={s.thumbnails}>
        <Thumbnails />
      </div>
    </div>
  )
}

export default ImageGallery;