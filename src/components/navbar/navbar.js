import React, { useState } from 'react';
import './navbar.css';
import '../../index.css'

const Navbar = () => {
  const [isActive, setActive] = useState("false");
  const navLinks = document.querySelectorAll('.navbar-links li');

  const navSlide = () => {
    setActive(!isActive);
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7}s`;
    });
  };

  

  return (
    <body>
      <nav>
        <div className='nav-logo'>
          <h4>Mellow Honey</h4>
        </div>
          <ul className={isActive ? 'navbar-links nav-active' : "navbar-links"}>
            <li><a className='nav-link' href="#home">Home</a></li>
            <li><a className='nav-link' href="#music">Music</a></li>
            <li><a className='nav-link' href="#shows">Shows</a></li>
            <li><a className='nav-link' href="#merch">Merch</a></li>
            <li><a className='nav-link' href="#gallery">Gallery</a></li>
          </ul>
          <div className='burger' onClick={navSlide}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
      </nav>
    </body>
  );

};

export default Navbar;