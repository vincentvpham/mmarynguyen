import React from 'react'

import Gallery from 'react-photo-gallery'

import ArtworkLayout from '../../layouts/Artwork/Artwork'

import iDontWantToBeFound from '../../images/paintings/i-dont-want-to-be-found-2016.png'
import iLoveArt from '../../images/paintings/i-love-art-2016.png'
import nextToYou from '../../images/paintings/next-to-you-2016.png'
import sheWasGolden from '../../images/paintings/she-was-golden-2016.png'

export const PAINTINGS = [
  {
    src: iDontWantToBeFound,
    width: 3,
    height: 3
  },
  {
    src: iLoveArt,
    width: 3,
    height: 3
  },
  {
    src: nextToYou,
    width: 3,
    height: 3
  },
  {
    src: sheWasGolden,
    width: 4,
    height: 3
  },
]

const Paintings = () => (
  <ArtworkLayout>
    <Gallery photos={PAINTINGS} />
  </ArtworkLayout>
)

export default Paintings
