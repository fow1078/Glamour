import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function CatalogItem({data}) {
  return (
    <Col xs={12} sm={6} lg={4} xl={3} className='d-flex justify-content-center flex-column d-sm-block'>
      <Link to={`/catalog/${data.slug}-${data.id}`} state={{ data: data }} style={{width: '100%', justifyContent: 'center', display: 'flex'}}><img src={data.defaultImage} alt={data.label} className='margin-xs-center img-xs-mw' /></Link>
      <div>
        <Link to={`/catalog/${data.slug}-${data.id}`} state={{ data: data }}><h5 className='item_title'>{data.label}</h5></Link>
        <Link to={`/catalog/${data.slug}-${data.id}`} state={{ data: data }}><h6 className='item_price'>{data.price}$</h6></Link>
      </div>
    </Col>
  )
}

export default CatalogItem
