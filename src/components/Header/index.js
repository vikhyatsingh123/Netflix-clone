import React from 'react';
import './style.css';

import Logo from '../../assets/logo.png';
import Profile from '../../assets/profile.png';

export default function Header({black}){
    return (
      <header className={black ? "black" : ""}>
        <div className="header--logo">
          <a href="/">
            <img src={Logo} alt="netflix" />
          </a>
        </div>
        <div className="header--user">
          <a href="/">
            <img src={Profile} alt="User" />
          </a>
        </div>
      </header>
    );
}
