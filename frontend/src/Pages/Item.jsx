import { useLocation } from 'react-router-dom';
import BackgroundVideo from '../Secondary Components/BackgroundVideo';
import FirstNav from '../Header_Navs_Footer/FirstNav';
import SecondNav from '../Header_Navs_Footer/SecondNav';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ItemGallery from '../Secondary Components/ItemGallery';
import Sizes from '../Secondary Components/Sizes';
import Footer from '../Header_Navs_Footer/Footer';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/Cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function Item() {
  const [size, setSize] = useState('');
  const { isEnglish } = useSelector((store) => store.lang);
  const dispatch = useDispatch();
  let { state } = useLocation();
  let itemData = state.data;
  const handleAdd = () => {
    if (size !== '') {
      dispatch(addToCart({id: itemData.id + size, image: itemData.defaultImage, label: itemData.label, size: size, price: itemData.price, amount: 1}))
    }
  }

  return (
    <>
      <BackgroundVideo />
      <FirstNav />
      <div style={{paddingTop: '80px', paddingBottom: '120px'}}>
        <SecondNav />
        <Container style={{padding: '80px 20px'}}>
          <Row>
            <Col xs={{span: 12}} md={{span: 5, offset: 0}}>
              <ItemGallery images={itemData.secondaryImages} />          
            </Col>
            <Col xs={{span: 12}} md={{span: 6, offset: 1}} style={{margin: 'auto'}}>
              <div style={{width: '100%', display: 'flex', flexDirection: 'column',}}>
                <h5 style={{color: '#fff', fontSize: '18px'}}>{itemData.label}</h5>
                <p style={{color: '#fff', marginBottom: '10px'}}>${itemData.price} USD</p>
              </div>
              <div style={{width: '100%'}}>
                <Sizes sizes={itemData.sizes} size={size} setSize={setSize} />
              </div>
              <div style={{width: '100%', marginBottom: '30px'}}>
                <button className='addtocart-btn' onClick={handleAdd}>{isEnglish ? 'Add To Cart' : 'Додати до кошика'}</button>
              </div>
              <div>
                <ul>
                  {itemData.description.split('- ').map((el, ind) => {
                    if (el) {
                      return <li key={ind} className='descriptionList'>{' ' + el}</li> 
                    }
                  })}
                </ul>
              </div>
            </Col>
          </Row>
          <div style={{width: '100%', textAlign: 'center', marginTop: '60px'}}>
            <Link to='/catalog' className='showMore_button'>{isEnglish ? 'Return to Catalog' : 'Повернутися до Каталогу'}</Link>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Item
