import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/images/white_logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function SecondNav() {
  const { isEnglish } = useSelector((store) => store.lang);
  const handleLogoClick = () => {
    document.location.href = '/';
  }
  return (
    <Container>
      <Row>
        <Col xs={{span: 6, offset: 3}} md={{span: 4, offset: 4}} lg={{span: 2, offset: 5}} style={{marginBottom: '20px'}} as='a' onClick={handleLogoClick}>
          <img src={Logo} alt='Glamour Logo' className='margin-xs-center' />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={{span: 10, offset: 1}} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
          <div style={{padding: '5px 10px', width: '100%', backgroundColor: '#0000009a', borderRadius: '10px'}}>
            <ul style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <li><Link to="/" style={{fontWeight: 500}}>{isEnglish ? 'Home' : 'Головна'}</Link></li>
              <li><Link to="/catalog" style={{fontWeight: 500}}>{isEnglish ? 'Catalog' : 'Каталог'}</Link></li>
              <li><Link to="/contact" style={{fontWeight: 500}}>{isEnglish ? 'Contact' : 'Контакти'}</Link></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SecondNav
