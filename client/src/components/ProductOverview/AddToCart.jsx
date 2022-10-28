import React, {useState} from 'react';
import s from './style.css';

const AddToCart = ({cart}) => {
  const [size, setSize] = useState('');
  const [qty, setQty] = useState([]);
  let obj = cart[0]?.skus;
  const sizeArr = [];
  const qtyArr = [];
  for (let key in obj) {
    sizeArr.push(obj[key].size);
    qtyArr.push(obj[key].quantity);
  }

  const handleChange = e => {
    let val = e.target.value;
    setSize(e.target.value);
    let qtyNum = qtyArr.at(sizeArr.indexOf(val));
    let qtyLength = qtyNum < 15 ? qtyNum : 15;
    let arr = [];
    for (let i = 1; i <= qtyLength; i++) {
      arr.push(i);
    }
    setQty(arr);
  }

  return (
    <div id={s.cart}>
      <select id={s.size} defaultValue="default" onChange={handleChange}>
        <option value="default" disabled>SELECT SIZE</option>
        {
          sizeArr.map((size, idx) => <option key={idx} value={size}>{size}</option>)
        }
      </select>
      <select id={s.qty} defaultValue="default">
        {
          size ? qty.map((qt, idx) => <option key={idx} value={qt}>{qt}</option>) : <option value="default" disabled>-</option>
        }
      </select>
      <button id={s.addBtn}>ADD TO CART<span>+</span></button>
    </div>
  )
}

export default AddToCart;