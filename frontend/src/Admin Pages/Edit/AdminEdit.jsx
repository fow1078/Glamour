import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import AdminBg from '../Components/AdminBg';
import AdminNavigation from '../Components/AdminNavigation';
import { Link } from 'react-router-dom';


function AdminEdit() {
  const [clothesData, setClothesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8080/api/send_data").then((res) =>
        res.json().then((data) => { 
          let tmpArr = [];
          data.forEach(item => tmpArr.push(JSON.parse(item)))
          setClothesData(tmpArr);
          setIsLoading(false)
        })
    );
  }, []);


  if (isLoading) { 
    return <h2>Loading...</h2>
  }

  return (
    <>
      <AdminBg />
      <Container style={{padding: '80px 20px'}}>
        <AdminNavigation />
        <div style={{marginTop: '40px', width: '100%', textAlign: 'center'}}>
          <h3 style={{color: '#fff'}}>Edit</h3>
        </div>
        <div style={{padding: '40px 0'}}>
          {Array.isArray(clothesData) ? 
            clothesData.map((item) => {
              return <Link key={item.itemID} to={'/admin/edit/' + item.itemID} state={{data: item}}><div style={{height: '50px', width: '100%', backgroundColor: '#fff', borderRadius: '7px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', marginBottom: '10px'}}>
                  <div style={{color: '#000'}}>{item.id + '.' + ' ' + item.name}</div>
                </div></Link>
            })
          : 
            'No'
          }
        </div>
      </Container>
    </>
  )
}

export default AdminEdit;
