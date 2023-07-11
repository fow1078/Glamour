import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CatalogItem({data}) {
  const { isUSD } = useSelector((store) => store.curr)
  return (
    <Col xs={12} sm={6} lg={4} xl={3} className='d-flex justify-content-center flex-column d-sm-block'>
      <Link to={`/catalog/${data.slug}-${data.itemID}`} state={{ data: data }} style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
        <LazyLoadImage
          src={data.image.split(', ')[0]}
          width={'100%'}
          height={'auto'}
          className='margin-xs-center img-xs-mw'
          style={{ display: 'flex'}}
          alt={data.name}
          effect="blur"
        />
      </Link>
      <div>
        <Link to={`/catalog/${data.slug}-${data.itemID}`} state={{ data: data }}><h5 className='item_title' style={{marginTop: '20px'}}>{data.name}</h5></Link>
        <Link to={`/catalog/${data.slug}-${data.itemID}`} state={{ data: data }}><h6 className='item_price' style={{textDecoration: data.in_stock ? '' : 'line-through'}}>{data.in_stock ? isUSD ? data.price_USD + '$' : data.price_UAH + '₴' : 'SOLDOUT'}</h6></Link>
      </div>
    </Col>
  )
}

export default CatalogItem
