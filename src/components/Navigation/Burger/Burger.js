import React from 'react'
import PropTypes from 'prop-types'

import { slide as BurgerMenu } from 'react-burger-menu'

import Menu from '../Menu/Menu'

import './Burger.scss'

const Burger = ({ title }) => {

  return (
    <div className='burger'>
      <BurgerMenu>
        <Menu title={title} />
      </BurgerMenu>
    </div>
  )
}

Burger.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Burger
