import React from 'react';
import Thumbnails from './Thumbnails'
import s from './style.css';
import axios from 'axios'

const ImageGallery = ({ styleInfo }) => {
  console.log(styleInfo)
  const bgImg = {
    backgroundImage: `url(${styleInfo[0]?.photos[0].url})`,
    backgroundSize: '100% 100%'
  }
  return (
    <div id={s.gallery} style={bgImg}>
      <div id={s.thumbnails}>
        {
          styleInfo.map(item => <Thumbnails key={item.style_id} item={item} />)
        }

      </div>
    </div>
  )
}

export default ImageGallery;