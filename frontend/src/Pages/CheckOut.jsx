import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { CountryDropdown } from 'react-country-region-selector';
import postData from '../common/postData';


function CheckOut() {
  const { cartItems, amount, total, total_UAH } = useSelector((store) => store.cart);
  const { isEnglish } = useSelector((store) => store.lang);
  const [country, setCountry] = useState('');

  const [validated, setValidated] = useState(false);

  // Control Form
  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const [firstName, setFistName] = useState('');
  const handleFirstNameChange = (e) => {
    setFistName(e.target.value);
  }

  const [lastName, setLastName] = useState('');
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }
  
  const [address, setAddress] = useState('');
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const [addressDetails, setAddressDetails] = useState('');
  const handleAddressDetailsChange = (e) => {
    setAddressDetails(e.target.value);
  }

  const [city, setCity] = useState('');
  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const [postalCode, setPostalCode] = useState('');
  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  }

  const [number, setNumber] = useState('');
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const tmp = [];
    cartItems.forEach((item) => {
      tmp.push({
        name: item.label, 
        size: item.size,
        amount: item.amount
      })
    })
    const data = {
      email: email, 
      country: country, 
      first_name: firstName,
      last_name: lastName, 
      address: address, 
      address_details: addressDetails, 
      city: city, 
      postal_code: postalCode, 
      phone_number: number,
      price: {
        uah: total_UAH,
        usd: total 
      },
      cartItems: tmp
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log('keek')
    } else {
      event.preventDefault();
      postData("http://localhost:8080/api/order_data", data);
      window.location.replace("/checkout/final");
    }

    setValidated(true);
  };  

  return (
    <>
      <Row className='flex-column-reverse flex-lg-row'>
        <Col xs={12} lg={7} xl={{span: 5, offset: 1}}>
          <div style={{width: '100%', padding: '60px 30px 10px 30px'}}>
            <h5 style={{color: '#000', textAlign: 'center', fontFamily: 'monospace'}}>Glamour</h5>
            <hr style={{backgroundColor: '#000', width: '100%', height: '1px'}} />
            <div style={{padding: '30px 0 5px 0'}}>
              <Form  style={{marginBottom: '30px'}} noValidate validated={validated} onSubmit={handleSubmit}>
                <div style={{marginBottom: '2rem'}}>
                  <h6 style={{marginBottom: '10px'}}>Contact</h6>
                  <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
                    <Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="name@example.com" required />
                  </FloatingLabel>
                </div>

                <div>
                  <h6 style={{marginBottom: '10px'}}>Shipping address</h6>
                  <CountryDropdown
                    style={{width: '100%', padding: '1rem 0.75rem', borderRadius: '8px'}}
                    required
                    className="mb-3"
                    value={country}
                    onChange={(val) => setCountry(val)} 
                  />

                  <Row>
                    <Col xs={12} lg={6}>
                      <div>
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" >
                          <Form.Control type="text" value={firstName} onChange={handleFirstNameChange} placeholder="name@example.com" required />
                        </FloatingLabel>
                      </div>
                    </Col>
                    <Col xs={12} lg={6}>
                      <div>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" >
                          <Form.Control type="text" value={lastName} onChange={handleLastNameChange} placeholder="name@example.com" required />
                        </FloatingLabel>
                      </div>
                    </Col>
                  </Row>

                  <FloatingLabel controlId="floatingInput" label="Address / Post Office" className="mb-3" >
                    <Form.Control type="text" value={address} onChange={handleAddressChange} placeholder="name@example.com" required />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingInput" label="Address Details (Optional)" className="mb-3" >
                    <Form.Control type="text" value={addressDetails} onChange={handleAddressDetailsChange} placeholder="name@example.com" />
                  </FloatingLabel>

                  <Row>
                    <Col xs={12} lg={6}>
                      <div>
                        <FloatingLabel controlId="floatingInput" label="City" className="mb-3" >
                          <Form.Control type="text" value={city} onChange={handleCityChange} placeholder="name@example.com" required />
                        </FloatingLabel>
                      </div>
                    </Col>
                    <Col xs={12} lg={6}>
                      <div>
                        <FloatingLabel controlId="floatingInput" label="Postal Code" className="mb-3" >
                          <Form.Control type="text" value={postalCode} onChange={handlePostalCodeChange} placeholder="name@example.com" required />
                        </FloatingLabel>
                      </div>
                    </Col>
                  </Row>

                  <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3" >
                    <Form.Control type="tel" required value={number} onChange={handleNumberChange} placeholder="+380990073804" />
                  </FloatingLabel>


                  <div style={{width: '100%', textAlign: 'center'}}>
                    <button type='submit' className='addtocart-btn'>Checkout</button>
                  </div>

                </div>
              </Form>
              <hr style={{backgroundColor: '#000', width: '100%', height: '1px', marginTop: '10px', marginBottom: '0'}} />
              <footer style={{padding: '10px 0'}}>
                <ul className='flex-column flex-lg-row' style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                  <li><a href="/payment" style={{fontWeight: 400, fontSize: '12px', color: '#000'}}>{isEnglish ? 'Payment and Delivery' : 'Оплата та Доставка'}</a></li>
                  <li><Link to="/privacy-policy" state={{lang: isEnglish}} style={{fontWeight: 400, fontSize: '12px', color: '#000'}}>{isEnglish ? 'Privacy Policy' : 'Політика Конфіденційності'}</Link></li>
                  <li><a href="/exchange" style={{fontWeight: 400, fontSize: '12px', color: '#000'}}>{isEnglish ? 'Exchange and Refund' : 'Обмін та Повернення'}</a></li>
                </ul>
              </footer>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5} xl={6} style={{minHeight: '100%'}}>
          <div style={{padding: '40px 30px', backgroundColor: 'rgb(241 241 241)', borderLeft: '1px solid rgb(181 181 181)', height: '100%'}}>
            {cartItems.map((item) => {
              return <article key={item.id} className='cart-item'>
              <div style={{position: 'relative'}}>
                <p style={{position: 'absolute', top: '-10px', right: '-10px', border: '1px solid #000', color: '#fff', backgroundColor: '#000', borderRadius: '50%', width: '25px', height: '25px', textAlign: 'center'}}>{item.amount}</p>
                <img src={item.image} alt={item.label} style={{width: '75px', height: '75px', padding: '10px', backgroundColor: '#fff', border: '1px solid #686868', borderRadius: '10px'}} />
              </div>
              <div>
                <h4 style={{color: '#000'}}>{item.label} <br /> <span style={{color: '#575757', fontSize: '14px'}}>{item.size}</span></h4>
              </div>
              <div>
                <h5 className="item-price" style={{color: '#000'}}>{`$${item.price_USD}` + ' / ' + `₴${item.price_UAH}`}</h5>
              </div>
            </article>
            })}
            <hr style={{backgroundColor: '#000', width: '100%', height: '1px'}} />
            <footer>
              <div className="cart-total">  
                <h4 style={{color: '#000'}}>
                  Total <span style={{color: '#000'}}>{`$${total.toFixed(2)}` + ' / ' + `₴${total_UAH.toFixed(2)}`}</span>
                </h4>
              </div>
            </footer>

          </div>
        </Col>
      </Row>
    
    </>
  )
}

export default CheckOut;
