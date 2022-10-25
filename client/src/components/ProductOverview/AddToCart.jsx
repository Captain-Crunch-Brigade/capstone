import React from 'react';
import s from './style.css';

const AddToCart = () => {

  return (
    <div id={s.cart}>
      <select id={s.size}>
        <option>SELECT SIZE</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <select id={s.qty}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
    </div>
  )
}

export default AddToCart;