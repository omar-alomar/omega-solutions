import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src='/images/logoWhite90.png' className="logo-img" alt="logo"/>
            </Link>
          </div>
          <div className="footer-text">
            <a href="tel:6672403999"><p class='website-rights'>(667)-240-3999</p></a>
            <Link to="/contact"><p class='website-rights'>hello@omegasolutions.com</p></Link>
            <small class='website-rights'>Omega Business &amp; Web Solutions © 2022</small>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/comingsoon'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/comingsoon'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/comingsoon'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/comingsoon'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/comingsoon'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;