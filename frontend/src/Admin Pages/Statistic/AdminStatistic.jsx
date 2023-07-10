import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import AdminBg from '../Components/AdminBg';
import AdminNavigation from '../Components/AdminNavigation';
import postData from '../../common/postData';
import Accordion from 'react-bootstrap/Accordion';
import Loading from '../../Pages/Loading';


function AdminStatistic() {
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>  {
    fetch("https://glamour-42ebc6e636b8.herokuapp.com/api/send_order_data").then((res) =>
        res.json().then((data) => { 
          let tmp = [];
          data.forEach((item) => tmp.push(JSON.parse(item)));
          setOrderData(tmp);
          setIsLoading(false);
        })
    );
  }, []);

  const handleRemove = (e, itemID) => {
    e.preventDefault();
    e.stopPropagation();
    postData("https://glamour-42ebc6e636b8.herokuapp.com/api/statistic_delete", {id: itemID});
    setTimeout(() => { window.location.reload(); }, 500)
  }

  const handleReset = (e) => {
    e.preventDefault();
    postData("https://glamour-42ebc6e636b8.herokuapp.com/api/reset_orders", {});
    setTimeout(() => { window.location.reload(); }, 500);
  }

  const generateOrderCart = (order) => {
    const tmpCartItems = order.items.split('; ');
    tmpCartItems.pop();
    return tmpCartItems;
  }

  if (isLoading) { 
    return <Loading />;
  }
  return (
    <>
      <AdminBg />
      <Container style={{padding: '80px 20px'}}>
        <AdminNavigation />
        <div style={{marginTop: '40px', width: '100%', textAlign: 'center'}}>
          <h3 style={{color: '#fff'}}>Statistic</h3>
        </div>  
        <div style={{padding: '40px 0 0 0'}}>
          
          {Array.isArray(orderData) ? orderData.map((order) => {
            return (
              <Accordion key={order.order_id} style={{marginBottom: '20px'}}>
                <Accordion.Item eventKey={order.order_id}>
                  <Accordion.Header style={{position: 'relative'}}>
                    {order.order_id}
                    <div className='edit_remove' onClick={(e) => {handleRemove(e, order.id)}}>X</div>
                  </Accordion.Header>
                  <Accordion.Body>  
                    <div style={{padding: '20px'}}>
                      <Row>
                        <Col xs={12} md={6} lg={4} style={{marginBottom: '20px'}}>
                          <h6>User Details:</h6>
                          <ul style={{paddingLeft: '20px'}}>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Email: {order.email}</li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>First Name: {order.first_name}</li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Last Name: {order.last_name}</li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Phone Number: {order.phone_number}</li>
                          </ul>
                        </Col>
                        <Col xs={12} md={6} lg={4} style={{marginBottom: '20px'}}>
                          <h6>Location Details:</h6>
                          <ul style={{paddingLeft: '20px'}}>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Country: {order.country}</li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>City: {order.city}</li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Address/Post office: {order.address}</li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Address Details: {order.address_details}</li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Postal Code: {order.postal_code}</li>
                          </ul>
                        </Col>
                        <Col xs={12} lg={4} style={{marginBottom: '20px'}}>
                          <h6>Order Details:</h6>
                          <ul style={{paddingLeft: '20px'}}>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>
                              Cart Items: 
                              <br />
                              <ul style={{paddingLeft: '20px'}}>
                                {generateOrderCart(order).map((item, ind) => {
                                  return (
                                    <li key={ind} style={{listStyleType: 'disc'}}>
                                      <p style={{fontSize: '12px'}}>{item}</p>
                                    </li>
                                  )
                                })}
                              </ul>
                            </li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Price UAH: {order.price_UAH}₴</li>
                            <li style={{listStyleType: 'circle', fontSize: '14px'}}>Price USD: {order.price_USD}$</li>
                          </ul>
                        </Col>
                      </Row>      
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          }) : 'There is nothing in here'}
          <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={handleReset} type='' style={{padding: '10px 25px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '5px', width: '175px'}}>Reset</button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AdminStatistic;
