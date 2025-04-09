import React, { useState } from 'react';
import './Header.css';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import hamburger from '../assets/hamburger.png';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuVisible(true);
    setIsAnimatingOut(false);
  };

  const handleCloseMenu = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMenuVisible(false);
      setIsAnimatingOut(false);
    }, 300); // Match with CSS transition duration
  };

  return (
    <header id='header'>
      {isMenuVisible && (
        <section id='dropmenu' className={isAnimatingOut ? 'fade-out' : 'fade-in'}>
          <div id="exitIcon" onClick={handleCloseMenu}>x</div>
          <ul className="nav-links_moblie">
            <li><a href="#">소개</a></li>
            <li><a href="#">소소담담 APP</a></li>
            <li><a href="#">활동</a></li>
            <li><a href="#contact" >KOR</a></li>
          </ul>
        </section>
      )}

      <nav id='nav'>
        <a href='#' id='logo'>
          <img src={logo1} alt="Logo" />
          <img src={logo2} alt="Logo" />
        </a>
        <ul id='navcon'>
          <li><a href="#home">소개</a></li>
          <li><a href="#about">소소담담 APP</a></li>
          <li><a href="#contact">활동</a></li>
          <li><a href="#contact" className='kor'>KOR</a></li>
        </ul>
        <div id='hamburger' onClick={handleOpenMenu}>
          <img src={hamburger} alt="menu" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
