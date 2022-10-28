import React from 'react';
import s from './style.css'

const Description = ({desc}) => {

  return (
    <div id={s.desc}>
      <h4>{desc.slogan}</h4>
      <p>{desc.description}</p>
    </div>
  )
}

export default Description;