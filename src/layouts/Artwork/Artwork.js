import React from 'react'

import { Link, navigateTo } from 'gatsby'

import Layout from '../../components/layout'

import './Artwork.scss'

const Artwork = ({ children }) => {
  const _goToArtworkIndex = () => navigateTo('/artwork')

  return (
    <Layout>
      <div className="artwork">
        <div className="artwork-nav-container">
          <h1 onClick={_goToArtworkIndex}>Artwork</h1>
          <div className="artwork-nav">
            <Link to="/artwork/drawings" activeClassName="active">
              Drawings
            </Link>
            <Link to="/artwork/photographs" activeClassName="active">
              Photographs
            </Link>
            <Link to="/artwork/paintings" activeClassName="active">
              Paintings
            </Link>
            <Link to="/artwork/commercial" activeClassName="active">
              Commercial Work
            </Link>
            <Link to="/artwork/digital-art" activeClassName="active">
              Digital
            </Link>
            <Link to="/artwork/graphic-design" activeClassName="active">
              Graphic Design
            </Link>
            <Link to="/artwork/murals" activeClassName="active">
              Murals
            </Link>
          </div>
        </div>
        <div className="gallery">{children}</div>
        <div className="copyright">
          All content copyright the artist. No commercial use without express
          written permission.
        </div>
      </div>
    </Layout>
  )
}

export default Artwork
