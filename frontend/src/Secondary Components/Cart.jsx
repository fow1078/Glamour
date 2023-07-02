import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../features/Modal/modalSlice';
import { ChevronUp, ChevronDown } from '../icons';
import CartItem from './CartItem';
import { clearCart } from '../features/Cart/cartSlice';

function Cart() {
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, amount, total, total_UAH } = useSelector((store) => store.cart);
  const { isEnglish } = useSelector((store) => store.lang);
  const { isUSD } = useSelector((store) => store.curr);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeModal())
    document.body.classList.remove('body-scroll');
  }

  if (amount < 1) {
    return (
      <div className='cart' style={{position: 'fixed', top: 0, right: '-100px', height: '100vh', backgroundColor: '#000', display: isOpen ? 'block' : 'none', padding: '20px', transition: '0.4s', zIndex: 10000}}>
        <div onClick={handleClick} style={{position: 'absolute', top: 0, right: 0, padding: '20px 40px 0 0', fontSize: '22px', color: '#fff', fontWeight: '400', cursor: 'pointer'}}>X</div>
        <div style={{ padding: '40px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }} >
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>{isEnglish ? 'Your cart' : 'Ваш кошик'}</h3>
          <h4 style={{ color: '#fff', marginBottom: '20px' }}> {isEnglish ? 'is empty' : 'пуста'}</h4>
          <Link onClick={handleClick} to='/catalog' relative='path'><p style={{ color: '#fff', textDecoration: 'underline' }}>{isEnglish ? 'Continue Shopping' : 'Подовжити шопінг'}</p></Link>
        </div>
      </div>
    );
  }
  
  return (
  <>
    <div className='cart' style={{position: 'fixed', top: 0, right: '-100px', height: '100vh', backgroundColor: '#000', display: isOpen ? 'block' : 'none', padding: '20px', transition: '0.4s', zIndex: 10000}}>
      <div onClick={handleClick} style={{position: 'absolute', top: 0, right: 0, padding: '20px 40px 0 0', fontSize: '22px', color: '#fff', fontWeight: '400', cursor: 'pointer'}}>X</div>
      <div style={{ padding: '40px 10px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%', flexDirection: 'column' }} >
        <h3 style={{ color: '#fff', marginBottom: '20px' }}>{isEnglish ? 'Your cart' : 'Ваш кошик'}</h3>
        <hr style={{backgroundColor: '#fff', width: '100%', height: '3px'}} />
        <div className='noscroll' style={{width: '100%', height: '80vh', overflowY: 'scroll'}}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <div className="cart-total">  
            <h4>
              {isEnglish ? 'Total' : 'Сума'} <span>{isUSD ? `$${total.toFixed(2)}` : `₴${total_UAH.toFixed(2)}`}</span>
            </h4>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{padding: '5px', width: '100%'}}>
              <button className='checkout-btn' >Checkout</button>
            </div>
            <div style={{padding: '5px', width: '100%'}}>
              <button className='clear-btn' onClick={() => {dispatch(clearCart())}} >{isEnglish ? 'Clear' : 'Очистити'}</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </>
   
  )
}

export default Cart;
