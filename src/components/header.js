import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/ttblogo.png";
import personIcon from "../img/person.png";
import "./header.css"

function Header() {
  const headerStyle = {
    backgroundColor: '#fff', // Change this color to your desired background color
    color: '#fff', // Change text color if needed
    padding: '5px', // Adjust padding as needed
    display: 'flex',
    justifyContent: 'space-between', // Align items on opposite sides
    alignItems: 'center', // Center vertically
  };

  return (
    <div className='logo'>
      <nav style={headerStyle}>
        <img src={logo} alt="" />
        {/* <img src={personIcon} alt="" /> */}
      </nav>
    </div>
  );
}

export default Header;