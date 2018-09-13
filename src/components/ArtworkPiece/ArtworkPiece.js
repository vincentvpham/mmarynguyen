import React from 'react'

import './ArtworkPiece.scss'

const ArtworkPiece = ({ image }) => {

  return (
    <div className='artwork-piece'>
      <img src={image.src} alt='artwork' />
      <div className='title'>{image.title}</div>
    </div>
  )
}

export default ArtworkPiece
