import React from 'react';
import './navbar.css';
import '../../index.css'

const Navbar = () => {
  return (
    <body>
      <nav>
        <div className='nav-logo'>
          <h4>MELLOW HONEY</h4>
        </div>
          <ul className="navbar-links">
            <li><a className='nav-link' href="#home">Home</a></li>
            <li><a className='nav-link' href="#music">Music</a></li>
            <li><a className='nav-link' href="#merch">Merch</a></li>
            <li><a className='nav-link' href="#shows">Shows</a></li>
            <li><a className='nav-link' href="#gallery">Gallery</a></li>
          </ul>
      </nav>
    </body>
  );
};

export default Navbar;