import React from 'react'

import ArtworkLayout from '../../layouts/Artwork/Artwork'

import ArtworkPiece from '../../components/ArtworkPiece/ArtworkPiece'

import inADream from '../../images/photographs/in-a-dream-2016.png'

export const PHOTOGRAPHS = [
  {
    src: inADream,
    width: 4,
    height: 3,
    title: 'IN A DREAM (2016) PHOTOGRAPH'
  },
]

const Photographs = () => (
  <ArtworkLayout>
    {
      PHOTOGRAPHS.map(photo => <ArtworkPiece key={photo.title} image={photo} />)
    }
  </ArtworkLayout>
)

export default Photographs
