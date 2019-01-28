import React from 'react'

import ArtworkLayout from '../../layouts/Artwork/Artwork'

import ArtworkPiece from '../../components/ArtworkPiece/ArtworkPiece'

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
    height: 3,
    title: 'MAZE FACE (2016) GEL PEN'
  },
  {
    src: untitled3,
    width: 3,
    height: 3,
    title: 'UNTITLED (2016) INK PEN'
  },
  {
    src: untitled2,
    width: 3,
    height: 3,
    title: 'UNTITLED (2018) GRAPHITE'
  },
  {
    src: untitled1,
    width: 3,
    height: 3,
    title: 'UNTITLED (2017) BRUSH PEN'
  },
  {
    src: untitled4,
    width: 3,
    height: 3,
    title: 'UNTITLED (2018) INK PEN'
  },
  {
    src: melbourne,
    width: 3,
    height: 3,
    title: 'MELBOURNE (2018) INK PEN'
  },
]

const Drawings = () => (
  <ArtworkLayout>
    {
      DRAWINGS.map(drawing => <ArtworkPiece key={drawing.title} image={drawing} />)
    }
  </ArtworkLayout>
)

export default Drawings
