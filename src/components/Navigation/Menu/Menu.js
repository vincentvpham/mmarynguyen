import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faInstagram,
  faFacebookF,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'gatsby';

import resume from './Nguyen_Resume.pdf';
import Logo from './Logo';

import './Menu.scss';

const Menu = ({ title }) => {
  return (
    <div className="menu">
      <div className="body">
        <div className="header">
          <Logo />
          <Link to="/">
            <div className="title">
              <span className="title-start">| </span>
              {title}
            </div>
          </Link>
        </div>
        <div className="routes">
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/about" activeClassName="active">
            About
          </Link>
          <a
            href="https://vimeo.com/mmarynguyen"
            target="_blank"
            rel="noreferrer"
          >
            Animations
          </a>
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer">
        <div>
          <a
            href="https://www.linkedin.com/in/mmarynguyen"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="social-media" icon={faLinkedinIn} />
          </a>
          <a
            href="https://www.instagram.com/mmarynguyenn"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="social-media" icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/mmarynguyenn"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="social-media" icon={faFacebookF} />
          </a>
          <a
            href="https://www.tiktok.com/@mmarynguyenn"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="social-media" icon={faTiktok} />
          </a>
        </div>
        <div className="copyright">
          &copy; copyright {new Date().getFullYear()}, mary nguyen
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Menu;
