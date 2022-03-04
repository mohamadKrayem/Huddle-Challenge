import React from 'react';
import logo from '../../assets/logo.svg';
import illustration from '../../assets/illustration-mockups.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <img src={logo} alt=""/>
        <button href='#'>Try It Free</button>
      </div>
      <div className='header__main-container'>
        <div className='header__main-fsection'>
          <h2>Build The Community Your Fans Will Love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your adience. Create connections with your users as you engage in genuine discussion.</p>
          <button type="button" href="#" className="btn">Get Started For Free</button>
        </div>
        <img src={illustration} alt="" />
      </div>
    </div>
  )
}

export default Header