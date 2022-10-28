import React from 'react';
import Thumbnails from './Thumbnails'
import s from './style.css';
import axios from 'axios'

const ImageGallery = ({ gallery, styleId, styleClick }) => {

  let imgUrl = gallery[0]?.photos[0].thumbnail_url;

  gallery.map(style => {
    if (style.style_id === styleId) {
      imgUrl = style.photos[0].thumbnail_url;
    }
  })

  const bgImg = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: '100% 100%'
  }
  return (
    <div id={s.gallery} style={bgImg}>
      <div id={s.thumbnails}>
        {
          gallery.map(item => <Thumbnails key={item.style_id} item={item} styleClick={styleClick} />)
        }

      </div>
    </div>
  )
}

export default ImageGallery;