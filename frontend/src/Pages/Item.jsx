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
import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Item() {
  const [size, setSize] = useState('');
  const { isEnglish } = useSelector((store) => store.lang);
  const { isUSD } = useSelector((store) => store.curr)
  const dispatch = useDispatch();
  let { state } = useLocation();
  let itemData = state.data;

  const handleAdd = () => {
    if (size !== '' ) {
      dispatch(addToCart({id: itemData.itemID + size, image: itemData.image.split(', ')[0], label: itemData.name, size: size, price_USD: itemData.price_USD, price_UAH: itemData.price_UAH, amount: 1}))
      toast.success(`${itemData.name} added to cart!`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  const tmpSizes = itemData.sizes.split(', ');
  tmpSizes.pop();
  const tmpImages = itemData.image.split(', ');
  tmpImages.pop();

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    scrollToTop();
  }, [])
  return (
    <>
      <ToastContainer />
      <BackgroundVideo />
      <FirstNav />
      <div style={{paddingTop: '80px', paddingBottom: '120px'}}>
        <SecondNav />
        <Container style={{padding: '80px 20px'}}>
          <Row>
            <Col xs={{span: 12}} md={{span: 5, offset: 0}}>
              <ItemGallery images={tmpImages} />          
            </Col>
            <Col xs={{span: 12}} md={{span: 6, offset: 1}} style={{margin: 'auto'}}>
              <div style={{width: '100%', display: 'flex', flexDirection: 'column',}}>
                <h5 style={{color: '#fff', fontSize: '18px'}}>{itemData.name}</h5>
                {itemData.on_sale ? <>
                    <p style={{marginBottom: '5px', textDecoration: 'line-through', textDecorationColor: 'red', textDecorationThickness: '1.75px', color: '#c5c5c5'}}>{isUSD ? '$' + itemData.sale_price_USD + ' USD'  : '₴' + itemData.sale_price_UAH + ' UAH'}</p>
                    <h6><p style={{color: '#fff', marginBottom: '10px'}}>{isUSD ? `$${itemData.price_USD} USD` :  `₴${itemData.price_UAH} UAH`}</p></h6>
                  </>
                :
                  <>
                    <p style={{color: '#fff', marginBottom: '10px'}}>{isUSD ? `$${itemData.price_USD} USD` :  `₴${itemData.price_UAH} UAH`}</p>
                  </>
                }
                
              </div>
              <div style={{width: '100%'}}>
                <Sizes sizes={itemData.sizes === '' ? ['OS'] : tmpSizes} size={size} setSize={setSize} />
              </div>
              <div style={{width: '100%', marginBottom: '30px'}}>
                <button className='addtocart-btn addbtn-disabled' disabled={itemData.in_stock ? false : true} onClick={handleAdd}>{itemData.in_stock ? isEnglish ? 'Add To Cart' : 'Додати до кошика' : 'SOLDOUT'}</button>
              </div>
              <div>
                <ul>
                  
                  {isEnglish ? itemData.description_en.split('- ').map((el, ind) => {
                    if (el) {
                      return <li key={ind} className='descriptionList'>{' ' + el}</li> 
                    }
                  }) 
                    :
                  itemData.description.split('- ').map((el, ind) => {
                    if (el) {
                      return <li key={ind} className='descriptionList'>{' ' + el}</li> 
                    }
                  })
                  }
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
