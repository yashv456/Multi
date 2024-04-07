import React from 'react';
import './footerStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';

import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="everything">
      <div className="top">
        <div className="nebula">
          <div className="company">Nebula</div>
          <p className="intro">
            Nebula is the world's leading <br /> community for creatives to
            share, grow, <br /> and get hired.
          </p>
          <div className="icons">
            <a href="/">
              {' '}
              <FontAwesomeIcon icon={faBasketball} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>
        <div className="column1">
          <p className="designer">For designers</p>
          <a href="/">Go Pro!</a>
          <a href="/">Explore design work</a>
          <a href="/">Design blog</a>
          <a href="/">Overtime podcast</a>
          <a href="/">Playoffs</a>
          <a href="/">Weekly warm-up</a>
          <a href="/">Refer a friend</a>
          <a href="/">Code of conduct</a>
        </div>
        <div className="column2">
          <p>Hire designers</p>
          <a href="/">Post a job opening</a>
          <a href="/">Post a freelance project</a>
          <a href="/">Search for designers</a>
          <p>Brands</p>
          <a href="/">Advertise with us</a>
        </div>
        <div className="column3">
          <p>Company</p>
          <a href="/">About</a>
          <a href="/">Careers</a>
          <a href="/">Support</a>
          <a href="/">Media kit</a>
          <a href="/">Testimonials</a>
          <a href="/">API</a>
          <a href="/">Terms of service</a>
          <a href="/">Privacy policy</a>
          <a href="/">Cookie policy</a>
        </div>
        <div className="column4">
          <p className="direct">Directories</p>
          <a href="/">Design jobs</a>
          <a href="/">Designers for hire</a>
          <a href="/">Freelance designers for hire</a>
          <a href="/">Tags</a>
          <a href="/">Places</a>
          <p className="assets">Design assets</p>
          <a href="/">Nebula MarketPlace</a>
          <a href="/">Creative Market</a>
          <a href="/">Fontspring</a>
          <a href="/">Font Squirrel</a>
        </div>
        <div className="column5">
          <p className="resources">Design Resources</p>
          <a href="/">Freelancing</a>
          <a href="/">Design Hiring</a>
          <a href="/" className>
            Design Portfolio
          </a>
          <a href="/">Design Education</a>
          <a href="/">Creative Process</a>
          <a href="/">Design Industry Trends</a>
        </div>
      </div>
      <div className="double-footer">
        <hr />
        <div className="container2">
          <p className="copyright">&copy; 2023 Nebula. All rights reserved.</p>
          <p className="number">
            20,501,853 <a href="/">stars found</a>
            <FontAwesomeIcon icon={faBasketball} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
