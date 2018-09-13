import React from 'react'

import { Link, navigateTo } from 'gatsby'

import Layout from '../../components/layout'

import './Artwork.scss'

const Artwork = ({ children }) => {

  const _goToArtworkIndex = () => navigateTo('/artwork')

  return (
    <Layout>
      <div className='artwork'>
        <div className='artwork-nav-container'>
          <h1 onClick={_goToArtworkIndex}>Artwork</h1>
          <div className='artwork-nav'>
            <Link to='/artwork/drawings' activeClassName='active'>
              Drawings
            </Link>
            <Link to='/artwork/paintings' activeClassName='active'>
              Paintings
            </Link>
            <Link to='/artwork/photography' activeClassName='active'>
              Photography
            </Link>
          </div>
        </div>
        <div className='gallery'>
          {children}
        </div>
      </div>
    </Layout>
  )
}

export default Artwork
