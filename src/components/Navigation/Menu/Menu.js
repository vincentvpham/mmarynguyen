import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import './Menu.scss'

const Menu = ({ title }) => {
  return (
    <div className="menu">
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
  )
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Menu
