import React, { useState, useEffect } from 'react'; 
import BackgroundVideo from '../Secondary Components/BackgroundVideo';
import FirstNav from '../Header_Navs_Footer/FirstNav';
import SecondNav from '../Header_Navs_Footer/SecondNav';
import Footer from '../Header_Navs_Footer/Footer';
import CatalogItem from '../Secondary Components/CatalogItem';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './Loading';


function Home() {
  const { isEnglish } = useSelector((store) => store.lang);
  const [clothesData, setClothesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://glamour-42ebc6e636b8.herokuapp.com/api/send_data").then((res) =>
        res.json().then((data) => { 
          let tmpArr = [];
          data.forEach(item => tmpArr.push(JSON.parse(item)))
          setClothesData(tmpArr);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000)
        })
    );
  }, []);

  if (isLoading) { 
    return <Loading />;
  }
  return (
    <>
      <BackgroundVideo />
      <FirstNav />
      <div style={{paddingTop: '80px', paddingBottom: '120px'}}>
        <SecondNav />
        <Container>
          <Row style={{padding: '40px 0'}}>
            {clothesData.map((data) => {
              return <CatalogItem key={data.itemID} data={data} />
            })}
          </Row>
          <div style={{width: '100%', textAlign: 'center', marginTop: '60px'}}>
            <Link to='/catalog' className='showMore_button'>{isEnglish ? 'Show Catalog' : 'Показати Каталог'}</Link>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Home;