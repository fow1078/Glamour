import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Secondary Components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../features/Modal/modalSlice';
import { useEffect } from "react";
import { calculateTotals } from "../features/Cart/cartSlice";
import { changeLanguage } from '../features/Translator/translatorSlice';
import { changeCurrency } from '../features/Exchange/exchangeSlice';
import Ukrainian from '../assets/images/ukraine.png';
import English from '../assets/images/usa.png';



function FirstNav() {
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems } = useSelector((store) => store.cart);
  const { isEnglish } = useSelector((store) => store.lang);
  const { isUSD } = useSelector((store) => store.curr)

  const dispatch = useDispatch();
  const handleClick = () => {
    let url = 'https://instagram.com/glamour.xn';
    window.open(url, '_blank').focus();
  }
  const handleFillClick = () => {
    if (isOpen) {
      dispatch(closeModal())
      document.body.classList.remove('body-scroll');
    }
  }
  const handleCurrencyChange = (e) => {
    if (e.target.value === 'USD') {
      dispatch(changeCurrency({ifUsd: true}));
    } else {
      dispatch(changeCurrency({ifUsd: false}));
    }
  }
  useEffect(() => {
    dispatch(calculateTotals({isUSD: isUSD}));
  }, [cartItems])
  return (
    <>  
      <div onClick={handleFillClick} className='fill' style={{display: isOpen ? 'block' : 'none'}}></div>
      <div style={{backgroundColor: '#000', padding: '10px 0', width: '100%', position: 'fixed', top: '0', zIndex: '10'}}>
        <Container>
          <Row style={{justifyContent: 'space-between'}} >
            <Col xs={6} lg={4} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer'}} as="a">
              <FontAwesomeIcon icon={faInstagram} style={{color: '#fff', fontSize: '22px', alignSelf: 'flex-end'}} onClick={handleClick} />
              <p className='d-none d-md-block' style={{color: '#fff', fontSize: '16px', marginLeft: '4px', fontWeight: '500'}} onClick={handleClick}>glamour.xn</p>
              <select value={isUSD ? 'USD' : 'UAH'} className='no-focus' onChange={handleCurrencyChange} style={{marginLeft: '10px', backgroundColor: '#ffffff', border: '1px solid #ffffff', borderRadius: '5px'}}> 
                <option value='USD'>USD</option>
                <option value='UAH'>UAH</option>
              </select>
            </Col>
            
            <Col xs={4} lg={2} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faBagShopping} style={{color: '#fff', fontSize: '22px', marginRight: '3px'}} onClick={() => { document.body.classList.add('body-scroll'); document.querySelector('.cart').classList.add('slide-left'); dispatch(openModal());}} />
              <div style={{marginLeft: '5px', display: 'flex', alignItems: 'center'}} onClick={() => {dispatch(changeLanguage())}}>
                <img src={isEnglish ? English : Ukrainian} alt={isEnglish ? 'English' : 'Українська'} style={{width: '25px'}} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Cart />
    </>
    
  )
}

export default FirstNav;

