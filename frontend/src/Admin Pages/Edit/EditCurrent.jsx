import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import postData from '../../common/postData';
import AdminBg from '../Components/AdminBg';
import AdminNavigation from '../Components/AdminNavigation';
import { url } from '../../url';


function EditCurrent() {
  let { state } = useLocation();
  const [isImagesLoading, setIsImagesLoading] = useState(false);
  let itemData = state.data;
  // Label
  const [label, setLabel] = useState(itemData.name);
  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  }
  // Price USD
  const [usd, setUSD] = useState(itemData.price_USD);
  const handleUSDChange = (e) => {
    setUSD(e.target.value);
  }
  // Price UAH
  const [uah, setUAH] = useState(itemData.price_UAH);
  const handleUAHChange = (e) => {
    setUAH(e.target.value);
  }
  // Description EN
  const [descrEN, setDescrEN] = useState(itemData.description_en);
  const handleDescrENChange = (e) => {
    setDescrEN(e.target.value);
  }
  // Description UA
  const [descrUA, setDescrUA] = useState(itemData.description);
  const handleDescrUAChange = (e) => {
    setDescrUA(e.target.value);
  }

  const currSizes = itemData.sizes.split(', ');
  currSizes.pop();
  // Sizes
  const [uniqeSizes, setUniqueSizes] = useState(currSizes)
  const handleSizeChange = (e) => {
    let val = e.target.value;
    if (e.target.checked) {
      let arr = [...uniqeSizes];
      arr.push(val)
      setUniqueSizes(arr)
    } else {
      let arr = [...uniqeSizes].filter((item) => item !== val);
      setUniqueSizes(arr)
    }
  }

  const controlSizes = () => {
    const sizes = document.querySelectorAll('.size-input-control');
    sizes.forEach((size) => {
      uniqeSizes.forEach((uniqueSize) => {
        if (uniqueSize === size.value) {
          size.checked = true;
        }
      }) 
    })
  }
  useEffect(() => {
    controlSizes()
  }, []);

  // Images
  const [images, setImages] = useState(itemData.image.split(', '));
  const handleImagesChange = (e) => {
    const tempImageArray = [];

    let tempImages = e.target.files;
    [...tempImages].forEach((file) => {
      let reader = new FileReader();
      reader.onloadend = function() {
        tempImageArray.push(reader.result)
      }
      reader.readAsDataURL(file);
    })
    setTimeout(() => {
      setImages(tempImageArray);
      setIsImagesLoading(true);
    }, 2000)
  }

  const [isInStock, setIsInStock] = useState(false);
  const handleInStockChange = () => {
    setIsInStock(!isInStock)
  }

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      id: itemData.id,
      label: label.trim(),
      price: {
        uah: uah,
        usd: usd
      },
      description_EN: descrEN.trim(), 
      description_UA: descrUA.trim(),
      slug: label.toLowerCase().replaceAll(/\W/g, '-').replaceAll(/-+/g, '-').replace(/^-/, '').replace(/-$/, ''),
      images: images,
      sizes: uniqeSizes.length < 1 ? '' : uniqeSizes,
      in_stock: itemData.in_stock
    }
    console.log(itemData)
    postData(`${url}/api/edit_items`, data);
    // setTimeout(() => { window.location = '/z8d6Ta3H49iJb3S9AR6XtTpb/edit'; }, 500)
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    postData(`${url}/api/edit_delete`, {id: id});
    setTimeout(() => { window.location = '/z8d6Ta3H49iJb3S9AR6XtTpb/edit'; }, 500);
  }

  return (
    <>
      <AdminBg />
      <Container style={{padding: '80px 20px'}}>
        <AdminNavigation />
        <div style={{marginTop: '40px', width: '100%', textAlign: 'center'}}>
          <h3 style={{color: '#fff'}}>Edit {itemData.name}</h3>
        </div>
        <div>
          <form className='addnew-form' style={{width: '100%', backgroundColor: '#ffffffc5', borderRadius: '10px' }}>
            <Row>
              <Col xs={12} lg={4}>
                <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                  <label htmlFor='item-label'  style={{fontSize: '18px', fontWeight: '500'}}>Label</label>
                  <input type='text' className='no-focus' required value={label} onChange={handleLabelChange} id='item-label' name='item-label' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} />
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                  <label htmlFor='item-price-UAH' style={{fontSize: '18px', fontWeight: '500'}}>Price UAH</label>
                  <input type='number' value={uah} required onChange={handleUAHChange} className='no-focus' id='item-price-UAH' name='item-price-UAH' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} />
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                  <label htmlFor='item-price-USD' style={{fontSize: '18px', fontWeight: '500'}}>Price USD</label>
                  <input type='number' value={usd} required onChange={handleUSDChange} className='no-focus' id='item-price-USD' name='item-price-USD' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={4}>
                <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                  <label htmlFor='item-descr-en' style={{fontSize: '18px', fontWeight: '500'}}>Description EN</label>
                  <textarea className='no-focus' value={descrEN} required onChange={handleDescrENChange} id='item-descr-en' name='item-descr-en' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px', minHeight: '100px'}}></textarea>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                  <label htmlFor='item-descr-ua' style={{fontSize: '18px', fontWeight: '500'}}>Description UA</label>
                  <textarea className='no-focus' value={descrUA} required onChange={handleDescrUAChange} id='item-descr-ua' name='item-descr-ua' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px', minHeight: '100px'}}></textarea>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                  <label style={{fontSize: '18px', fontWeight: '500'}}>Sizes</label>
                  <div style={{display: 'flex', alignItems: 'flex-start'}}>
                    <div>
                      <input className='size-input-control' name='item-S-size' id='item-S-size' type='checkbox' value='S' onChange={handleSizeChange} />
                      <label htmlFor='item-S-size' style={{marginLeft: '3px'}}>S</label>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                      <input className='size-input-control' name='item-M-size' id='item-M-size' value='M' type='checkbox' onChange={handleSizeChange} />
                      <label htmlFor='item-M-size' style={{marginLeft: '3px'}}>M</label>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                      <input className='size-input-control' name='item-L-size' id='item-L-size' value='L' type='checkbox' onChange={handleSizeChange} />
                      <label htmlFor='item-L-size' style={{marginLeft: '3px'}}>L</label>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                      <input className='size-input-control' name='item-XL-size' id='item-XL-size' value='XL' type='checkbox' onChange={handleSizeChange} />
                      <label htmlFor='item-XL-size' style={{marginLeft: '3px'}}>XL</label>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                      <input className='size-input-control' name='item-XXL-size' id='item-XXL-size' value='XXL' type='checkbox' onChange={handleSizeChange} />
                      <label htmlFor='item-XXL-size' style={{marginLeft: '3px'}}>XXL</label>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} className='edit_delete_btn' >
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <label htmlFor='item-images' style={{fontSize: '18px', fontWeight: '500'}}>Images</label>
                  <input multiple type='file' accept="image/*" required onChange={handleImagesChange} className='no-focus' id='item-images' name='item-images' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} />
                </div>
              </Col>
              <Col xs={12} md={6} className='edit_delete_btn' style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'end'}}>
                <div>
                  <input className='size-input-control' name='item-inStock' id='item-inStock' value={isInStock} type='checkbox' onChange={handleInStockChange} />
                  <label htmlFor='item-inStock' style={{fontSize: '16px', fontWeight: '400'}}>In Stock</label>
                </div>
              </Col>
            </Row>
            <Row style={{marginTop: '10px'}}>
              <Col xs={12} md={6} style={{display: 'flex', alignItems: 'flex-end'}} className='edit_delete_btn'>
                <div style={{width: '100%', textAlign: 'end'}}>
                  <button type='' onClick={(e) => {handleDelete(e, itemData.id)}} style={{padding: '10px 25px', backgroundColor: '#620505', color: '#fff', border: 'none', borderRadius: '5px', width: '100%'}}>Delete</button>
                </div>
              </Col>
              <Col xs={12} md={6} style={{display: 'flex', alignItems: 'flex-end'}}>
                <div style={{width: '100%', textAlign: 'end'}}>
                  <button type='' className='edit_submit' onClick={handleClick} style={{padding: '10px 25px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px', width: '100%'}}>Submit</button>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </>
  )
}

export default EditCurrent;