import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import './Navigation.scss'

const Navigation = ({ title }) => {

  return (
    <div className='navigation'>
      <Link to='/'>
        <div className='title'>
            {title}
        </div>
      </Link>
      <div className='menu'>
        <Link to='/about'>
          About
        </Link>
        <Link to='/involvement'>
          Involvement
        </Link>
        <Link to='/artwork'>
          Artwork
        </Link>
        <a href='https://www.depop.com/mmarynguyen' target='_blank' rel="noopener noreferrer">
          Shop
        </a>
        <Link to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  )
}

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navigation
