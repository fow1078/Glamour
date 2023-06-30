import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import AdminBg from '../Components/AdminBg';
import AdminNavigation from '../Components/AdminNavigation';

function AdminAddNew() {
  // Inputs Control
  // Label
  const [label, setLabel] = useState('');
  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  }
  // Price USD
  const [usd, setUSD] = useState(0);
  const handleUSDChange = (e) => {
    setUSD(e.target.value);
  }
  // Price UAH
  const [uah, setUAH] = useState(0);
  const handleUAHChange = (e) => {
    setUAH(e.target.value);
  }
  // Description EN
  const [descrEN, setDescrEN] = useState('');
  const handleDescrENChange = (e) => {
    setDescrEN(e.target.value);
  }
  // Description UA
  const [descrUA, setDescrUA] = useState('');
  const handleDescrUAChange = (e) => {
    setDescrUA(e.target.value);
  }
  const [newSizes, setNewSizes] = useState([]);
  const handleSizeChange = (e) => {
    let val = e.target.value;
    if (e.target.checked) {
      console.log(val);
      const temp = [...newSizes];
      temp.push(val); 
      setNewSizes(temp);
    } else {
      const temp = [...newSizes];
    }
  }

  return (
    <>
      <AdminBg />
      <Container style={{padding: '80px 20px'}}>
        <AdminNavigation />
        <div style={{marginTop: '40px', width: '100%', textAlign: 'center'}}>
          <h3 style={{color: '#fff'}}>Add New Item</h3>
        </div>
        <form className='addnew-form' style={{width: '100%', backgroundColor: '#ffffffc5', borderRadius: '10px' }}>
          <Row>
            <Col xs={12} lg={4}>
              <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                <label htmlFor='item-label'  style={{fontSize: '18px', fontWeight: '500'}}>Label</label>
                <input type='text' className='no-focus' value={label} onChange={handleLabelChange} id='item-label' name='item-label' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} />
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                <label htmlFor='item-price-UAH' style={{fontSize: '18px', fontWeight: '500'}}>Price UAH</label>
                <input type='number' value={uah} onChange={handleUAHChange} className='no-focus' id='item-price-UAH' name='item-price-UAH' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} />
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                <label htmlFor='item-price-USD' style={{fontSize: '18px', fontWeight: '500'}}>Price USD</label>
                <input type='number' value={usd} onChange={handleUSDChange} className='no-focus' id='item-price-USD' name='item-price-USD' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                <label htmlFor='item-descr-en' style={{fontSize: '18px', fontWeight: '500'}}>Description EN</label>
                <textarea className='no-focus' value={descrEN} onChange={handleDescrENChange} id='item-descr-en' name='item-descr-en' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px', minHeight: '100px'}}></textarea>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                <label htmlFor='item-descr-ua' style={{fontSize: '18px', fontWeight: '500'}}>Description UA</label>
                <textarea className='no-focus' value={descrUA} onChange={handleDescrUAChange} id='item-descr-ua' name='item-descr-ua' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px', minHeight: '100px'}}></textarea>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                <label style={{fontSize: '18px', fontWeight: '500'}}>Sizes</label>
                <div style={{display: 'flex', alignItems: 'flex-start'}}>
                  <div>
                    <input name='item-S-size' id='item-S-size' type='checkbox' value='S' onChange={handleSizeChange} />
                    <label htmlFor='item-S-size' style={{marginLeft: '3px'}}>S</label>
                  </div>
                  <div style={{marginLeft: '10px'}}>
                    <input name='item-M-size' id='item-M-size' value='M' type='checkbox' onChange={handleSizeChange} />
                    <label htmlFor='item-M-size' style={{marginLeft: '3px'}}>M</label>
                  </div>
                  <div style={{marginLeft: '10px'}}>
                    <input name='item-L-size' id='item-L-size' value='L' type='checkbox' onChange={handleSizeChange} />
                    <label htmlFor='item-L-size' style={{marginLeft: '3px'}}>L</label>
                  </div>
                  <div style={{marginLeft: '10px'}}>
                    <input name='item-XL-size' id='item-XL-size' value='XL' type='checkbox' onChange={handleSizeChange} />
                    <label htmlFor='item-XL-size' style={{marginLeft: '3px'}}>XL</label>
                  </div>
                  <div style={{marginLeft: '10px'}}>
                    <input name='item-XXL-size' id='item-XXL-size' value='XXL' type='checkbox' onChange={handleSizeChange} />
                    <label htmlFor='item-XXL-size' style={{marginLeft: '3px'}}>XXL</label>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor='item-images' style={{fontSize: '18px', fontWeight: '500'}}>Images</label>
                <input type='file' className='no-focus' id='item-images' name='item-images' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} />
              </div>
            </Col>
            <Col xs={12} md={6} style={{display: 'flex', alignItems: 'flex-end'}}>
              <div style={{width: '100%', textAlign: 'end'}}>
                <button type='' style={{padding: '10px 25px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px'}}>Submit</button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}
   {/* 
            Title, prices, sizes, descriptions, images
          */}
export default AdminAddNew;
