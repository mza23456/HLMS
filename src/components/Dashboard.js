import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import Header from './header';

const Dashboard = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [loanCount, setLoanCount] = useState(0);
  const [approvedLoanCount, setApprovedLoanCount] = useState(0);

  useEffect(() => {
    // Fetch data from API
    fetch('/api/customers')
      .then((response) => response.json())
      .then((data) => setCustomerCount(data.count));

    fetch('/api/loans')
      .then((response) => response.json())
      .then((data) => setLoanCount(data.count));

    fetch('/api/loans/approved')
      .then((response) => response.json())
      .then((data) => setApprovedLoanCount(data.count));
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '20px' }}></main>
      </div>
      <Footer />
      <Row className='m-3'>
        <Col md={3} >
          <Card>
            <Card.Body>
              <Card.Title>ลูกค้าที่สมัคร</Card.Title>
              <h1 className="text-center">{customerCount}</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>โครงการทีม</Card.Title>
              <h1 className="text-center">{loanCount}</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>ใบสั่งงาน</Card.Title>
              <h1 className="text-center">{approvedLoanCount}</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>พนักงานรับส่งเอกสาร</Card.Title>
              <h1 className="text-center">{approvedLoanCount}</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default Dashboard;