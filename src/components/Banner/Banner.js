import React from 'react'

import bannerImage from './banner.png';

import './Banner.scss'

const Banner = () => {

  return (
    <div className='banner'>
      <img src={bannerImage} alt='banner' />
      <div className='title-container'>
        <div className='title'>
          Student, Artist & Entrepreneur
        </div>
      </div>
    </div>
  )
}

export default Banner
