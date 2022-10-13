import React from 'react';
import s from './style.css';

const Header = () => {

  return (
    <div id={s.header}>
      <h1 id={s.logo}>Atelier</h1>
      <input id={s.search} type="search" />
    </div>
  )
}

export default Header;