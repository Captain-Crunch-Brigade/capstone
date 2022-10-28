import React from 'react';
import Thumbnails from './Thumbnails'
import s from './style.css';

const StyleSelector = ({selector, styleId, styleClick}) => {

  let styleName = selector[0]?.name;

  selector.map(style => {
    if (style.style_id === styleId) {
      styleName = style.name;
    }
  })


  return (
    <div id={s.selector}>
      <h4>Style: {styleName}</h4>
      {
        selector.map(item => (
            <Thumbnails key={item.style_id} item={item} styleClick={styleClick} />
        ))
          }
    </div>
  )
}

export default StyleSelector;