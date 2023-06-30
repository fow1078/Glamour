import React from 'react';
import { ChevronUp, ChevronDown } from '../icons';
import { removeItem, increase, decrease } from '../features/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function CartItem({ id, label, image, price, amount, size }) {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={image} alt={label} style={{}} />
      <div>
        <h4>{label} {size}</h4>
        <h5 className="item-price">${price}</h5>
        <button className='remove-btn' onClick={() => {dispatch(removeItem(id))}}>X</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => {dispatch(increase({id: id}))}} >
          <ChevronUp />
        </button>
          <p className="amount">{amount}</p>
        <button className='amount-btn' onClick={() => {dispatch(decrease({id: id}))}} >  
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
