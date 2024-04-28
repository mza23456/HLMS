// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';


function Sidebars() {
  let navigate = useNavigate();
  
  function goToHome() {
    navigate('/dashboard'); // กำหนด path ไปยังหน้าแดชบอร์ด
  }
  return (
    <Sidebar
      style={{
        backgroundColor: "#eee",
        height: "100vh", // ความสูงเต็มหน้าจอ
      }}
    >
      <Menu>
        <MenuItem
          style={{
            backgroundColor: "#005EC7",
            color: "#FFF",
          }}
          onClick={goToHome}
        >
          หน้าหลัก
        </MenuItem>
        <SubMenu label="จัดการสมัครสินเชื่อ">
          <Link
            to="/dashboard/homeloancal"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>วิเคราะห์สินเชื่อบ้าน</MenuItem>
          </Link>
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
    </Sidebar>
  );
}

export default Sidebars;