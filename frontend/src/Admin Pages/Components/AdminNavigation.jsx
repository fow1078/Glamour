import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import { FaTelegram } from 'react-icons/fa';

import Logo from '../../assets/images/white_logo.png';


function AdminNavigation() {
  return (
    <Container>
        <a href='http://t.me/glamour_support_bot' target='_blank' className='tg-btn' style={{position: 'fixed', top: '10px', right: '10px', width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#fff', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaTelegram style={{fontSize: '100px'}} />
        </a>

      <Row>
        <Col xs={{span: 6, offset: 3}} md={{span: 4, offset: 4}} lg={{span: 2, offset: 5}} style={{marginBottom: '20px'}} as='a' >
          <img src={Logo} alt='Glamour Logo' className='margin-xs-center' />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={{span: 10, offset: 1}} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
          <div style={{padding: '5px 10px', width: '100%', backgroundColor: '#ffffff9a', borderRadius: '10px'}}>
            <ul style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <li><Link to="/z8d6Ta3H49iJb3S9AR6XtTpb/add-new" relative='path' style={{fontWeight: 500, color: '#000'}}>Add New</Link></li>
              <li><Link to="/z8d6Ta3H49iJb3S9AR6XtTpb/stats" relative='path' style={{fontWeight: 500, color: '#000'}}>Statistic</Link></li>
              <li><Link to="/z8d6Ta3H49iJb3S9AR6XtTpb/edit" relative='path' style={{fontWeight: 500, color: '#000'}}>Edit</Link></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminNavigation
