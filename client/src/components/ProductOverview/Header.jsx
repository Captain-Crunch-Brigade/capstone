import React from 'react';
import s from './style.css';

const Header = () => {

  return (
    <div id={s.header}>
      <h1 id={s.logo}>Atelier</h1>
      <div id={s.search}>
        <input type="search" />
        <button>&#x1F50D;</button>
      </div>
    </div>
  )
}

export default Header;