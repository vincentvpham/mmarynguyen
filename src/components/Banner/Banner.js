import React from 'react'
import PropTypes from 'prop-types'

import './Banner.scss'

const Banner = ({ image, title }) => {

  return (
    <div className='banner'>
      <img src={image} alt='banner' />
      {title &&
        <div className='title-container'>
          <div className='title'>
            {title}
          </div>
        </div>
      }
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Banner
