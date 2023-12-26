import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/images/glamour.gif'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function SecondNav() {
  const { isEnglish } = useSelector((store) => store.lang);
  const handleLogoClick = () => {
    document.location.href = '/';
  }
  return (
    <Container>
      <Row>
        <Col xs={{span: 6, offset: 3}} md={{span: 4, offset: 4}} lg={{span: 2, offset: 5}} style={{marginBottom: '20px'}} as='a' onClick={handleLogoClick}>
          <LazyLoadImage
            src={Logo}
            width={'100%'}
            height={'auto'}
            className='margin-xs-center'
            alt="Glamour Logo"
            effect="blur"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={{span: 10, offset: 1}} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
          <div style={{padding: '5px 10px', width: '100%', backgroundColor: 'rgb(150 150 150 / 45%)', borderRadius: '10px'}}>
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
