import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function AdminForm() {
  return (
   <>
    <div style={{width: '100%', backgroundColor: '#ffffffc5', borderRadius: '10px', padding: '40px 60px' }}>
      <h2 style={{textAlign: 'center'}}>Login</h2>
      <form id='adminForm'>
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
          <label for='adminLogin' style={{fontSize: '18px', fontWeight: '500'}}>Login</label>
          <input id='adminLogin' name='adminLogin' type='text' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} placeholder='Login' />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '1px'}}>
          <label for='adminPassword' style={{fontSize: '18px', fontWeight: '500'}}>Password</label>
          <input id='adminPassword' name='adminPassword' type='password' style={{borderRadius: '5px', backgroundColor: '#00000037', border: '2px solid #000', padding: '4px'}} placeholder='Password' />
        </div>
        <div>
          <input type='checkbox' name='rememberMe' id='rememberMe' />
          <label for='rememberMe'>Remember Me</label>
        </div>

        <div style={{width: '100%', textAlign: 'end'}}>
          <button type='' style={{padding: '10px 25px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px', marginTop: '7px'}}>Submit</button>
        </div>
      </form>
    </div>
   </>
  )
}

export default AdminForm;
