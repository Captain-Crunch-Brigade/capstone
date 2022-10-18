import React from 'react';
import s from './style.css'

const Thumbnails = ({ item }) => {
  console.log(item)

  return (
    <img className={s.thumbs} src={item.photos[0]?.thumbnail_url} width={'20%'} height={'60px'} />
  )
}

export default Thumbnails;