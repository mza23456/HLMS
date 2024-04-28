import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import Header from './header';
import Sidebars from './sidebar';

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
      <div className="d-flex">
        <Sidebars />
        {/* <Sidebar
          style={{
            backgroundColor: "#eee",
            height: "100vh", // ความสูงเต็มหน้าจอ
          }}
        >
          <Menu>
            <SubMenu label="จัดการสมัครสินเชื่อ">
             <Link to="homeloancal" style={{ textDecoration: 'none' ,color: 'black'}}><MenuItem>วิเคราะห์สินเชื่อบ้าน</MenuItem></Link>
              <MenuItem>เพิ่มข้อมูลลูกค้า</MenuItem>
              <MenuItem>ตรวจสอบข้อมูลลูกค้า</MenuItem>
            </SubMenu>
            <SubMenu label="จัดการใบสั่งงาน">
              <MenuItem>เพิ่มใบสั่ง</MenuItem>
              <MenuItem>ตรวจสอบพนักงงานรับส่งเอกสาร</MenuItem>
              <MenuItem>ตรวจสอบใบสั่งงาน</MenuItem>
            </SubMenu>
            <SubMenu label="จัดการโครงการ">
              <MenuItem>Submenu</MenuItem>
              <MenuItem>Submenu</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar> */}
        <Container className='m-2'>
        <h5 className='mt-5 fw-semibold'>จำนวน</h5>
        <hr style={{ color: '#F48C25',margin: '0',borderTopWidth: '3px'}} />
          <Row className="m-3">
            <Col md={3}>
              <Card style={{ color: 'white' ,backgroundColor: '#F48C25'}}>
                <Card.Body>
                  <Card.Title>ลูกค้าที่สมัคร</Card.Title>
                  <h1 className="text-center">{customerCount}</h1>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ color: 'white' ,backgroundColor: '#52A4FF'}}>
                <Card.Body>
                  <Card.Title>โครงการทีม</Card.Title>
                  <h1 className="text-center">{loanCount}</h1>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ color: 'white' ,backgroundColor: '#00BB1E'}}>
                <Card.Body>
                  <Card.Title>ใบสั่งงาน</Card.Title>
                  <h1 className="text-center">{approvedLoanCount}</h1>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ color: 'white' ,backgroundColor: '#FF7DD3'}}>
                <Card.Body>
                  <Card.Title>คอมมิชชัน</Card.Title>
                  <h1 className="text-center">{approvedLoanCount}</h1>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};


export default Dashboard;