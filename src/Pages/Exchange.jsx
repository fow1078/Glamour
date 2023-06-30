import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import BackgroundVideo from '../Secondary Components/BackgroundVideo';
import FirstNav from '../Header_Navs_Footer/FirstNav';
import SecondNav from '../Header_Navs_Footer/SecondNav';
import Footer from '../Header_Navs_Footer/Footer';
import { useSelector } from 'react-redux';

function Exchange() {
  const { isEnglish } = useSelector((store) => store.lang);
  return (
    <>
      <BackgroundVideo />
      <FirstNav />
      <div style={{paddingTop: '80px', paddingBottom: '30px'}}>
        <SecondNav />
        <Container style={{padding: '40px 20px'}}>
          <h2 style={{color: '#fff', textAlign: 'center', fontSize: '20px', fontWeight: '500'}}>{isEnglish ? 'Exchange and Refund' : 'Обмін та Повернення'}</h2>
          {isEnglish ? 
            <Row>
              <Col xs={12} lg={6} style={{padding: '10px'}}>
                <div className='payment' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '25px 25px', borderRadius: '5px', height: '230px'}}>
                  <h3 style={{color: '#fff', fontSize: '18px'}}>Refund:</h3>
                  <div>
                    <div>
                      <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                        Items purchased from stock can be returned or exchanged within 14 days of purchase. The item must be brand new with all tags and packaging. After checking the condition of the item by our manager, a refund will be made to your bank card within 1-7 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} style={{padding: '10px'}}>
                <div className='payment' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '25px 25px', borderRadius: '5px', height: '230px'}}>
                  <h3 style={{color: '#fff', fontSize: '18px'}}>Essential:</h3>
                  <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                    Items purchased on sale are not subject to return. Check the condition and completeness of the order upon receipt at the Nova Poshta branch. If you find a defect, please inform us immediately, we will replace it with a new item. If the damage was done during the delivery process, you need to request compensation at the branch.
                  </p>
                </div>
              </Col>
            </Row>
            : 
            <Row>
              <Col xs={12} lg={6} style={{padding: '10px'}}>
                <div className='payment' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '25px 25px', borderRadius: '5px', height: '230px'}}>
                  <h3 style={{color: '#fff', fontSize: '18px'}}>Повернення товару:</h3>
                  <div>
                    <div>
                      <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                        Речі, куплені з наявності, можна повернути або обміняти протягом 14 днів з моменту покупки. Річ повинна бути абсолютно новою зі всіма бірками та пакуванням. Після перевірки стану речі нашим менеджером, повернення коштів на вашу банківську карту буде здійснено впродовж 1-7 робочих днів.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} style={{padding: '10px'}}>
                <div className='payment' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '25px 25px', borderRadius: '5px', height: '230px'}}>
                  <h3 style={{color: '#fff', fontSize: '18px'}}>Важливо:</h3>
                  <p style={{color: '#d0d0d0', fontSize: '12px'}}>
                    Речі, куплені на розпродажі, поверненню не підлягають. Стан та комплектацію замовлення перевіряйте при отриманні у відділенні Нової Пошти. У разі виявлення дефекту терміново повідомте нам, ми заміним на нову річ. Якщо пошкодження були зроблені в процесі доставки, потрібно вимагати компенсацію у відділенні.
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

export default Exchange
