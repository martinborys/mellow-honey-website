import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (

    <nav>
        <ul className="navbar-links">
          <li><a className='nav-link' href="#home">Home</a></li>
          <li><a className='nav-link' href="#music">Music</a></li>
          <li><a className='nav-link' href="#merch">Merch</a></li>
          <li><a className='nav-link' href="#shows">Shows</a></li>
          <li><a className='nav-link' href="#gallery">Library</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;