import React, { useState, useEffect } from 'react'; 
import BackgroundVideo from '../Secondary Components/BackgroundVideo';
import FirstNav from '../Header_Navs_Footer/FirstNav';
import SecondNav from '../Header_Navs_Footer/SecondNav';
import Footer from '../Header_Navs_Footer/Footer';
import CatalogItem from '../Secondary Components/CatalogItem';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { items } from '../data/data';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Home() {
  const { isEnglish } = useSelector((store) => store.lang);
  const [clothesData, setClothesData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/send_data").then((res) =>
        res.json().then((data) => { 
          let tmpArr = [];
          data.forEach(item => tmpArr.push(JSON.parse(item)))
          setClothesData(tmpArr);
        })
    );
  }, []);

  return (
    <>
      <BackgroundVideo />
      <FirstNav />
      <div style={{paddingTop: '80px', paddingBottom: '120px'}}>
        <SecondNav />
        <Container>
          <Row>
            {clothesData.map((data) => {
              return <CatalogItem key={data.name} data={data} />
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