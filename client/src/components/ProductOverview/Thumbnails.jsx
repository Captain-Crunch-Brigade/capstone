import React from 'react';
import s from './style.css'

const Thumbnails = ({ item, styleClick }) => {

  const handleClick = () => {
    styleClick(item.style_id)
  }

  return (
    <img className={s.thumbs} src={item.photos[0]?.thumbnail_url} width={'20%'} height={'60px'} onClick={handleClick} />
  )
}

export default Thumbnails;