import React from 'react';
import { ChevronUp, ChevronDown } from '../icons';
import { removeItem, increase, decrease } from '../features/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CartItem({ id, label, image, price_USD, price_UAH, amount, size }) {
  const dispatch = useDispatch();
  const { isUSD } = useSelector((store) => store.curr);
  return (
    <article className='cart-item'>
      <LazyLoadImage
        src={image}
        width={'100%'}
        height={'auto'}
        alt={label}
        effect="blur"
      />
      <div>
        <h4>{label} {size}</h4>
        <h5 className="item-price">{isUSD ? `$${price_USD}` : `₴${price_UAH}`}</h5>
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
