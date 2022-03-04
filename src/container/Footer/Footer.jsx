import React from 'react';
import logo from '../../assets/logo(1).svg';
import './Footer.scss';
import location from '../../assets/icon-location.svg';
import email from '../../assets/icon-email.svg';
import phone from '../../assets/icon-phone.svg';
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

import Icon from '../../components/IconsComponent/Icon';

const Footer = () => {
  const description = [
    "Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    "+1-543-123-4567",
    "exapmle@fylo.com"
  ]

  return (
    <div className="Footer">
      <img src={logo} alt="Huddle" className="logo"/>
      <div className="firstContainer">
        <Icon src={location} description={description[0]}/>
        <Icon src={phone} description={description[1]}/>
        <Icon src={email} description={description[2]}/>
        
      </div>
      <div className="secondContainer">
        <ul>
          <li><a>About Us</a></li>
          <li><a>What We Do</a></li>
          <li><a>FAQ</a></li>
        </ul>
        <ul id="second">
          <li><a>Career</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      </div>

      <div className="social-links">
        <div>
          <FaFacebook className="social-icons"/>
          <FaTwitter className="social-icons"/>
          <FaInstagram className="social-icons"/>
        </div>

        <small>&copy; Copyright 2018 Huddle. All rights reserved.</small>
      </div>
    </div>
  )
}

export default Footer