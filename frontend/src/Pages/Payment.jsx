import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import BackgroundVideo from '../Secondary Components/BackgroundVideo';
import FirstNav from '../Header_Navs_Footer/FirstNav';
import SecondNav from '../Header_Navs_Footer/SecondNav';
import Footer from '../Header_Navs_Footer/Footer';
import { useSelector } from 'react-redux';


function Payment() {
  const { isEnglish } = useSelector((store) => store.lang);
  return (
    <>
      <BackgroundVideo />
      <FirstNav />
      <div style={{paddingTop: '80px', paddingBottom: '30px'}}>
        <SecondNav />
        <Container style={{padding: '40px 20px'}}>
          <h2 style={{color: '#fff', textAlign: 'center', fontSize: '20px', fontWeight: '500'}}>{isEnglish ? 'Payment and Delivery' : 'Оплата та Доставка'}</h2>
          {isEnglish ? 
            <Row>
              <Col xs={12} lg={6} style={{padding: '10px'}}>
                <div className='payment' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '25px 25px', borderRadius: '5px', height: '230px'}}>
                  <h3 style={{color: '#fff', fontSize: '18px'}}>Delivery time and price depends on your place of residence:</h3>
                  <div>
                    <ul style={{marginBottom: '10px', paddingLeft: '30px'}}>
                      <li style={{listStyleType: 'unset', color: '#dedede'}}>
                        <p style={{color: '#fff', fontSize: '14px'}}>In Ukraine from 1 to 4 days (Nova Poshta)</p>
                      </li>
                      <li style={{listStyleType: 'unset', color: '#dedede'}}>
                        <p style={{color: '#fff', fontSize: '14px'}}>To Europe from 7 to 17 days (Ukrposhta)</p>
                      </li>
                      <li style={{listStyleType: 'unset', color: '#dedede'}}>
                        <p style={{color: '#fff', fontSize: '14px'}}>To the USA from 14 to 20 days (Ukrposhta)</p>
                      </li>
                    </ul>
                    <div>
                      <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                        <span style={{color: '#b02626'}}>Important:</span> After you placed the order, manager will contact you during next 24 hours to confirm your order.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} style={{padding: '10px'}}>
                <div className='payment' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '25px 25px', borderRadius: '5px', height: '230px'}}>
                  <h3 style={{color: '#fff', fontSize: '18px'}}>Delivery</h3>
                  <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                    Items will be shipped from 1 to 3 days from the moment of your order. To track your order, you will be sent a tracking number by Email.
                  </p>
                  <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                    <span style={{color: '#b02626'}}>Warning:</span> Upon receipt of your order, you will pay shipping, according to the rates of your post office.
                  </p>
                </div>
              </Col>
            </Row>
            : 
            <Row>
              <Col xs={12} lg={6} style={{padding: '10px'}}>
                <div className='payment' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '25px 25px', borderRadius: '5px', height: '230px'}}>
                  <h3 style={{color: '#fff', fontSize: '18px'}}>Терміни і ціна доставки залежить від вашого місця проживання:</h3>
                  <div>
                    <ul style={{marginBottom: '10px', paddingLeft: '30px'}}>
                      <li style={{listStyleType: 'unset', color: '#dedede'}}>
                        <p style={{color: '#fff', fontSize: '14px'}}>В Україні від 1 до 4 днів (Нова Пошта)</p>
                      </li>
                      <li style={{listStyleType: 'unset', color: '#dedede'}}>
                        <p style={{color: '#fff', fontSize: '14px'}}>В Європу від 7 до 17 днів (Укрпошта)</p>
                      </li>
                      <li style={{listStyleType: 'unset', color: '#dedede'}}>
                        <p style={{color: '#fff', fontSize: '14px'}}>В США від 14 до 20 днів (Укрпошта)</p>
                      </li>
                    </ul>
                    <div>
                      <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                        <span style={{color: '#b02626'}}>Важливо:</span> Після оформлення замовлення, протягом доби з вами звʼяжеться менеджер для його підтвердження й оплати.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} style={{padding: '10px'}}>
                <div className='payment' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '25px 25px', borderRadius: '5px', height: '230px'}}>
                  <h3 style={{color: '#fff', fontSize: '18px'}}>Відправка</h3>
                  <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                    Речі будуть відправлятися від 1 до 3 днів з моменту вашого замовлення. Для відстеження вашого замовлення, вам буде надісланий трек-номер на Електрону пошту.
                  </p>
                  <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                    <span style={{color: '#b02626'}}>Попередження:</span>При отримані вашого замовлення ви сплачуєте доставку, за тарифами вашої пошти.
                  </p>
                </div>
              </Col>
            </Row>
          }
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Payment
