import React from 'react'

import ArtworkLayout from '../../layouts/Artwork/Artwork'
import ArtworkPiece from '../../components/ArtworkPiece/ArtworkPiece'

const ArtworkCategory = ({ images }) => (
  <ArtworkLayout>
    {images.map(image => (
      <ArtworkPiece key={image.key} image={image} />
    ))}
  </ArtworkLayout>
)

export default ArtworkCategory
