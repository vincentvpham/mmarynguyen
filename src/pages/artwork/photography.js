import React from 'react'

import Gallery from 'react-photo-gallery'

import ArtworkLayout from '../../layouts/Artwork/Artwork'

import inADream from '../../images/photography/in-a-dream-2016.png'

export const PHOTOGRAPHY = [
  {
    src: inADream,
    width: 4,
    height: 3
  },
]

const Photography = () => (
  <ArtworkLayout>
    <Gallery photos={PHOTOGRAPHY} />
  </ArtworkLayout>
)

export default Photography
