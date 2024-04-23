// src/components/Navbar.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#002D63', // Change this color to your desired background color
    color: '#fff', // Change text color if needed
    padding: '10px 0px 5px 0px', // Adjust padding as needed
  };

  return (
    <nav style={navbarStyle}>
      <h3 className='text-center'>ระบบบริหารจัดการข้อมูลการพิจารณาสินเชื่อบ้าน</h3>
    </nav>
  );
}

export default Navbar;
