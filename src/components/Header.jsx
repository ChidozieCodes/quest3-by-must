import React from 'react';
import './Header.css'

function Header() {
  return (
    <header id='header'>
      <nav id='nav'>
        <a href='#' id='logo'>My React App</a>
        <ul id='navcon'>
          <li><a href="#home">소개</a></li>
          <li><a href="#about">소소담담 APP</a></li>
          <li><a href="#contact">활동</a></li>
          <li><a href="#contact" className='kor'>KOR</a></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header
