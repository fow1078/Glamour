import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCcApplePay, faGooglePay, faCcMastercard, faCcVisa, faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 

function Footer() {
  const { isEnglish } = useSelector((store) => store.lang)
  const handleClick = () => {
    let url = 'https://instagram.com/glamour.xn';
    window.open(url, '_blank').focus();
  }
  return (
    <Container>
      <Row>
        <h5 style={{color: '#fff', fontWeight: 500, textAlign: 'center', marginBottom: '15px'}}>{isEnglish ? 'Additional Links' : 'Додаткові посилання'}</h5>
        <Col lg={{span: 6, offset: 3}} style={{marginBottom: '20px'}} >
          <ul className='flex-column flex-lg-row' style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <li><a href="/payment" style={{fontWeight: 400, fontSize: '12px'}}>{isEnglish ? 'Payment and Delivery' : 'Оплата та Доставка'}</a></li>
            <li><Link to="/privacy-policy" state={{lang: isEnglish}} style={{fontWeight: 400, fontSize: '12px'}}>{isEnglish ? 'Privacy Policy' : 'Політика Конфіденційності'}</Link></li>
            <li><a href="/exchange" style={{fontWeight: 400, fontSize: '12px'}}>{isEnglish ? 'Exchange and Refund' : 'Обмін та Повернення'}</a></li>
          </ul>
        </Col>
      </Row>
      <FontAwesomeIcon onClick={handleClick} icon={faInstagram} style={{color: '#fff', fontSize: '22px', width: '100%', textAlign: 'center', marginBottom: '60px', cursor: 'pointer'}} />
      <Row> 
        <Col lg={{span: 4, offset: 4}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap'}} >
            <FontAwesomeIcon icon={faCcApplePay} style={{color: '#fff', fontSize: '36px' }} />
            <FontAwesomeIcon icon={faGooglePay} style={{color: '#fff', fontSize: '36px' }} />
            <FontAwesomeIcon icon={faCcMastercard} style={{color: '#fff', fontSize: '36px' }} />
            <FontAwesomeIcon icon={faCcVisa} style={{color: '#fff', fontSize: '36px' }} />
            <FontAwesomeIcon icon={faCcPaypal} style={{color: '#fff', fontSize: '36px' }} />
          </div>
        </Col>
      </Row>
      <h6 style={{color: '#dddddd', fontSize: '12px', width: '100%', textAlign: 'center', fontWeight: 400, marginTop: '20px', marginBottom: '20px'}}>© 2023 Sick Beno. All Rights Reserved.</h6>
    </Container>
  )
}

export default Footer;
