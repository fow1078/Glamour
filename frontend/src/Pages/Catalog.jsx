import { useEffect, useState } from 'react'; 
import BackgroundVideo from '../Secondary Components/BackgroundVideo';
import FirstNav from '../Header_Navs_Footer/FirstNav';
import SecondNav from '../Header_Navs_Footer/SecondNav';
import Footer from '../Header_Navs_Footer/Footer';
import CatalogItem from '../Secondary Components/CatalogItem';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import { url } from '../url'


function Catalog() {
  const [sortOption, setSortOption] = useState('');
  const { isUSD } = useSelector((store) => store.curr)
  const [clothesData, setClothesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${url}/api/send_data`).then((res) =>
        res.json().then((data) => { 
          let tmpArr = [];
          data.forEach(item => tmpArr.push(JSON.parse(item)))
          setClothesData(tmpArr);
          setIsLoading(false);
        })
    );
  }, []);

  const { isEnglish } = useSelector((store) => store.lang);
  const handleSortOptionChange = () => {
    const value = document.querySelector('#select_sort').value;
    setSortOption(value);
  }

  useEffect(() => {
    async function changeOrder() {
      if (sortOption === 'title-ascending') {
        const sortAscTitle = [...clothesData];
        sortAscTitle.sort(function(a, b) {
          let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
          if (fa < fb) {
              return -1;
          }
          if (fa > fb) {
              return 1;
          }
          return 0;
        });
        setClothesData(sortAscTitle);
      } else if (sortOption === 'title-descending') {
        const sortDescTitle = [...clothesData];
        sortDescTitle.sort(function(a, b) {
          let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
          if (fa > fb) {
              return -1;
          }
          if (fa < fb) {
              return 1;
          }
          return 0;
        });
        setClothesData(sortDescTitle);
      } else if (sortOption === 'price-ascending') {
        const sortAscPrices = [...clothesData];
        sortAscPrices.sort(function(a, b) {
          if (isUSD) {
            return a.price_USD - b.price_USD;
          } else {
            return a.price_UAH - b.price_UAH;
          }
        });
        setClothesData(sortAscPrices);
      } else if (sortOption === 'price-descending') {
        const sortDescPrices = [...clothesData];
        sortDescPrices.sort(function(a, b) {
          if (isUSD) {
            return b.price_USD - a.price_USD;
          } else {
            return b.price_UAH - a.price_UAH;
          }
        });
        setClothesData(sortDescPrices);
      }  
    }
    changeOrder();
  }, [sortOption])

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    scrollToTop();
  }, [])

  if (isLoading) { 
    return <Loading />
  }

  return (
    <>
      <BackgroundVideo />
      <FirstNav />
      <div style={{paddingTop: '80px', paddingBottom: '120px'}}>
        <SecondNav /> 

        <div style={{padding: '20px 0', width: '100%', textAlign: 'center', marginTop: '30px'}}>
          <Container>
            <Row className='justify-content-between'> 
              <Col className='d-flex justify-content-start align-items-center'>
                <label htmlFor='select_sort' style={{color: '#fff', marginRight: '10px'}}>{isEnglish ? 'Sort by' : 'Сортувати за'}:</label>
                <select name='select_sort' id='select_sort' className='catalog_sort_select' onChange={handleSortOptionChange} value={sortOption}>
                  <option value='title-ascending' select='true'>{isEnglish ? 'Alphabetically, A-Z' : 'Абеткою, А-Я'}</option>
                  <option value='title-descending'>{isEnglish ? 'Alphabetically, Z-A' : 'Абеткою, Я-А'}</option>
                  <option value='price-ascending'>{isEnglish ? 'Price, low to high' : 'Ціною, від нижчої до вищої'}</option>
                  <option value='price-descending'>{isEnglish ? 'Price, high to low' : 'Ціною, від вищої до нижчої'}</option>
                </select>
              </Col>
              <Col className='d-flex justify-content-end align-items-center'>
                <label style={{color: '#fff'}}>{clothesData.length} {isEnglish ? 'Products' : 'Товарів'}</label>
              </Col>
            </Row>
          </Container>
        </div> 

        <Container> 
          <Row>
            {clothesData.map((data, ind) => {
              return <CatalogItem key={ind} data={data} />
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Catalog; 
