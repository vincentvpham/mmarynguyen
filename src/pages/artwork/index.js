import React from 'react'

import Gallery from 'react-photo-gallery'

import Layout from '../../components/layout'

// drawings
import mazeFace from '../../images/drawings/maze-face-2016.png'
import melbourne from '../../images/drawings/melbourne-2018.png'
import untitled1 from '../../images/drawings/untitled-drawing-brush-pen-2017.jpg'
import untitled2 from '../../images/drawings/untitled-drawing-graphite-2018.jpg'
import untitled3 from '../../images/drawings/untitled-drawing-ink-pen-2016.png'
import untitled4 from '../../images/drawings/untitled-drawing-ink-pen-2018.jpg'
// paintings
// import untitled4 from '../../images/drawings/untitled-drawing-ink-pen-2018.jpg'

import '../../styles/artwork.scss';

const PHOTO_SET = [
  {
    src: mazeFace,
    width: 3,
    height: 3
  },
  {
    src: melbourne,
    width: 3,
    height: 4
  },
  {
    src: untitled1,
    width: 3,
    height: 4
  },
  {
    src: untitled2,
    width: 3,
    height: 3
  },
  {
    src: untitled3,
    width: 3,
    height: 3
  },
  {
    src: untitled4,
    width: 4,
    height: 3
  },
]

const ArtworkPage = ({ children }) => (
  <Layout>
    <div className='artwork'>
      <h1>Artwork</h1>
      <div className='gallery'>
        <Gallery photos={PHOTO_SET} />
      </div>
    </div>
  </Layout>
)

export default ArtworkPage
