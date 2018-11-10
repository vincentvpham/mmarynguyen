import React from 'react'
import PropTypes from 'prop-types'

import Menu from './Menu/Menu';

import './Navigation.scss'

const Navigation = ({ title }) => {

  return (
    <div className='navigation'>
      <Menu title={title} />
    </div>
  )
}

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navigation
