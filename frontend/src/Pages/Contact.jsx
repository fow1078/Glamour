import React, { useState, useEffect } from 'react'; 
import BackgroundVideo from '../Secondary Components/BackgroundVideo';
import FirstNav from '../Header_Navs_Footer/FirstNav';
import SecondNav from '../Header_Navs_Footer/SecondNav';
import Footer from '../Header_Navs_Footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useSelector } from 'react-redux';
import postData from '../common/postData';



function Contact() {
  const [number, setNumber] = useState();
  const [country, setCountry] = useState();
  const { isEnglish } = useSelector((store) => store.lang);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://ipapi.co/json/");
      const jsonData = await response.json();
      // console.log(jsonData)
      setCountry(jsonData.country)
    }
    getData();
  }, [])

  // Handle Form Changes 
  const [fullname, setFullname] = useState('');
  const handleNameChange = (e) => {
    setFullname(e.target.value);
  }

  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  } 

  const [comment, setComment] = useState('');
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      full_name: fullname, 
      email: email, 
      phone_number: number, 
      comment: comment
    }
    postData("https://glamour-42ebc6e636b8.herokuapp.com/api/support_data", data)
    setTimeout(() => { window.location.reload(); }, 500)
  }
  return (
    <>
      <BackgroundVideo />
      <FirstNav />
      <div style={{paddingTop: '80px', paddingBottom: '120px'}}>
        <SecondNav />
        <Container style={{marginTop: '40px'}}>
          <form style={{borderRadius: '10px', padding: '20px'}}> 
            <Row className='justify-content-center'> 
              <Col xs={{span: 12, offset: 0}} md={{span: 6, offset: 0}}>
                <input value={fullname} onChange={handleNameChange} type='text' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '10px 15px',  }} className='contact_input name_input' placeholder='Jack Daniels' required id='validationDefault01' />
              </Col>
              <Col xs={{span: 12, offset: 0}} md={{span: 6, offset:0}}>
                <input value={email} onChange={handleEmailChange} type='email' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '10px 15px' }} className='contact_input' placeholder='name@example.com' required id='validationDefault02' />
              </Col>
            </Row>
            <Row className='justify-content-center'> 
              <Col xs={{span: 12, offset: 0 }} style={{marginTop: '10px'}}>
                 <PhoneInput placeholder="Enter phone number" value={number} onChange={setNumber} defaultCountry={country} international countryCallingCodeEditable={false} />
              </Col>
            </Row>
            <Row className='justify-content-center'> 
              <Col xs={{span: 12, offset: 0 }} style={{marginTop: '10px'}}>
                <textarea value={comment} onChange={handleCommentChange} type='tel' style={{backgroundColor: '#00000073', border: '1px #000 solid', width: '100%', padding: '10px 15px', height: '100px'  }} className='contact_input' placeholder='Comment' required id='validationDefault05' />
              </Col>
            </Row>
            <Row className='justify-content-center justify-content-md-end' style={{marginTop: '10px'}}>
              <Col xs={{span: 6}} md={4}>
                <button onClick={handleSubmit} className='contact_btn' style={{backgroundColor: '#000', border: '1px #000 solid', width: '100%', padding: '10px 15px', color: '#fff', transition: '0.4s'}} type="submit">{isEnglish ? 'Submit' : 'Підтвердити'}</button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Contact
