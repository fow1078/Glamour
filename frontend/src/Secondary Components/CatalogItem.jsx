import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CatalogItem({data}) {
  const { isUSD } = useSelector((store) => store.curr)
  return (
    <Col xs={12} sm={6} lg={4} xl={3} className='d-flex justify-content-center flex-column d-sm-block'>
      <Link to={`/catalog/${data.slug}-${data.itemID}`} state={{ data: data }} style={{width: '100%', justifyContent: 'center', display: 'flex'}}><img src={data.image.split(', ')[0]} alt={data.name} className='margin-xs-center img-xs-mw' /></Link>
      <div>
        <Link to={`/catalog/${data.slug}-${data.itemID}`} state={{ data: data }}><h5 className='item_title' style={{marginTop: '20px'}}>{data.name}</h5></Link>
        <Link to={`/catalog/${data.slug}-${data.itemID}`} state={{ data: data }}><h6 className='item_price'>{isUSD ? data.price_USD + '$' : data.price_UAH + '₴'}</h6></Link>
      </div>
    </Col>
  )
}

export default CatalogItem
