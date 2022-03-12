import React, { useState } from 'react';
import './navbar.css';
import '../../index.css'
import smileyFace from '../../assets/smileyFace.png'

const Navbar = () => {
  const [isActive, setActive] = useState("false");
  const navLinks = document.querySelectorAll('.navbar-links li');

  const navSlide = () => {
    setActive(!isActive);
    navLinks.forEach((link, index) => {
      if (isActive) {
        link.style.animation = '';
      } else{
      link.style.animation = `navlinkFade 0.5s ease forwards ${(index / 7) + 0.4}s`;
    }});
  };

  

  return (
    <body>
      <nav>
        <div>
          <img src={smileyFace} alt="smile" className='smiley-face'></img>
        </div>
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
            <div className={!isActive ? 'line1 ' : 'line1trans'}></div>
            <div className={!isActive ? 'line2 ' : 'line2trans'}></div>
            <div className={!isActive ? 'line3 ' : 'line3trans'}></div>
          </div>
      </nav>
    </body>
  );

};

export default Navbar;