import React from 'react';
import Thumbnails from './Thumbnails'
import s from './style.css';
import axios from 'axios'

const ImageGallery = ({ gallery }) => {

  const bgImg = {
    backgroundImage: `url(${gallery[0]?.photos[0].thumbnail_url})`,
    backgroundSize: '100% 100%'
  }
  return (
    <div id={s.gallery} style={bgImg}>
      <div id={s.thumbnails}>
        {
          gallery.map(item => <Thumbnails key={item.style_id} item={item} />)
        }

      </div>
    </div>
  )
}

export default ImageGallery;