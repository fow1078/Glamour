import React, { useState, useEffect } from 'react';
import CatalogItem from '../Secondary Components/CatalogItem';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Loading from './Loading';


function CheckoutFinal() {
  const [orderId, setOrderId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>  {
    fetch("https://glamour-42ebc6e636b8.herokuapp.com/api/send_order_data").then((res) =>
        res.json().then((data) => { 
          setOrderId(JSON.parse(data[data.length - 1]).order_id)
          setIsLoading(false);
        })
    );
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();    
      window.location.replace("/");
    }, 15000)
  })
  const handleClick = () => {
    let url = 'https://instagram.com/glamour.xn';
    window.open(url, '_blank').focus();
  }

  if (isLoading) { 
    return <Loading />
  }
  return (
    <div style={{height: '100vh', width: '100%', backgroundColor: '#000', position: 'fixed', top: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>

      <div style={{marginTop: '20px', opacity: 0}} className='fadeTH'>
        <h4 style={{color: '#fff', textAlign: 'center'}}>Thank you for your order!</h4>
        <p style={{color: '#fff', textAlign: 'center', marginBottom: '15px', fontSize: '16px'}}>Your order №{orderId} has been received. <br/> You will be contacted soon!</p>
        <p style={{color: '#fff', textAlign: 'center', fontSize: '12px'}}>You will be automatically redirected to homepage in 15 seconds</p>
        <p style={{color: '#fff', fontSize: '22px', textAlign: 'center'}} onClick={handleClick}><FontAwesomeIcon icon={faInstagram}  /></p>
      </div>
    </div>
  )
}

export default CheckoutFinal;
