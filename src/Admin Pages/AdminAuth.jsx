import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import AdminBg from './Components/AdminBg';
import AdminForm from './Components/AdminForm';

function AdminAuth() {
  return (
    <>
      <AdminBg />
      <Container style={{padding: '80px 20px'}}>
        <Row>
          <Col lg={{span: 6, offset: 3}}>
            <AdminForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminAuth;
