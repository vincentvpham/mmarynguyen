import React from 'react'

import Gallery from 'react-photo-gallery'

import ArtworkLayout from '../../layouts/Artwork/Artwork'

import mazeFace from '../../images/drawings/maze-face-2016.png'
import melbourne from '../../images/drawings/melbourne-2018.png'
import untitled1 from '../../images/drawings/untitled-drawing-brush-pen-2017.jpg'
import untitled2 from '../../images/drawings/untitled-drawing-graphite-2018.jpg'
import untitled3 from '../../images/drawings/untitled-drawing-ink-pen-2016.png'
import untitled4 from '../../images/drawings/untitled-drawing-ink-pen-2018.jpg'

export const DRAWINGS = [
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

const Drawings = () => (
  <ArtworkLayout>
    <Gallery photos={DRAWINGS} />
  </ArtworkLayout>
)

export default Drawings
