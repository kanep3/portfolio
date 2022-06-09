import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/face.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>hi i'm</h5>
        <h1>karl</h1>
        <h5 className="text-light">the data manipulator</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header
