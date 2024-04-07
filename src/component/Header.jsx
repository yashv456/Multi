import React from 'react';
import Profile from '../image/right.jpg';
import './headerStyle.css';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <>
      <div className="header">
        <div className="left">
          <div className="logo">Nebula</div>
          <div className="anchor">
            {' '}
            <a href="/">Inspiration</a>
            <a href="/">Find Work</a>
            <a href="/">Learn Design</a>
            <a href="/">Go Pro</a>
            <a href="/">Hire Designers</a>
          </div>
        </div>
        <div className="right">
          <input type="search" placeholder="Search" />
          <a href="/">
            <FontAwesomeIcon icon={faBusinessTime} />
          </a>
          <img src={Profile} alt="car" />
          <button className="button">upload</button>
        </div>
      </div>
      <div className="divider">
        <hr />
      </div>
    </>
  );
}

export default Header;
