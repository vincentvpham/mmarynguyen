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

import logo from './mn.png';

import './Menu.scss';

const Menu = ({ title }) => {
  return (
    <div className="menu">
      <div className="body">
        <img src={logo} alt="mary nguyen logo" />
        <Link to="/">
          <div className="title">{title}</div>
        </Link>

        <div className="routes">
          <Link to="/about" activeClassName="active">
            About
          </Link>
          <Link to="/cv" activeClassName="active">
            CV
          </Link>
          <Link to="/artwork" activeClassName="active">
            Artwork
          </Link>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer">
        <div>
          <FontAwesomeIcon className="social-media" icon={faLinkedinIn} />
          <FontAwesomeIcon className="social-media" icon={faInstagram} />
          <FontAwesomeIcon className="social-media" icon={faFacebookF} />
          <FontAwesomeIcon className="social-media" icon={faTiktok} />
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
