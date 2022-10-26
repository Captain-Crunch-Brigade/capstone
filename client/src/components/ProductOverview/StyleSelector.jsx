import React from 'react';
import Thumbnails from './Thumbnails'
import s from './style.css';

const StyleSelector = ({selector}) => {

  return (
    <div id={s.selector}>
      <h4>Style: {selector[0]?.name}</h4>
      {
        selector.map(item => (
            <Thumbnails key={item.style_id} item={item} />
        ))
          }
    </div>
  )
}

export default StyleSelector;