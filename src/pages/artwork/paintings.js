import React from 'react'

import ArtworkLayout from '../../layouts/Artwork/Artwork'

import ArtworkPiece from '../../components/ArtworkPiece/ArtworkPiece'

import iDontWantToBeFound from '../../images/paintings/i-dont-want-to-be-found-2016.png'
import iLoveArt from '../../images/paintings/i-love-art-2016.png'
import nextToYou from '../../images/paintings/next-to-you-2016.png'
import sheWasGolden from '../../images/paintings/she-was-golden-2016.png'

export const PAINTINGS = [
  {
    src: nextToYou,
    width: 3,
    height: 3,
    title: 'NEXT TO YOU (2016) ACRYLIC & OIL'
  },
  {
    src: iDontWantToBeFound,
    width: 3,
    height: 3,
    title: 'I DON\'T WANT TO BE FOUND(2016) ACRYLIC & OIL'
  },
  {
    src: iLoveArt,
    width: 3,
    height: 3,
    title: 'I LOVE ART (2016) WATERCOLOR'
  },
  {
    src: sheWasGolden,
    width: 4,
    height: 3,
    title: 'SHE WAS GOLDEN (2016) MIXED MEDIA: WATERCOLOR & GLITTER',
  },
]

const Paintings = () => (
  <ArtworkLayout>
    {
      PAINTINGS.map(painting => <ArtworkPiece image={painting} />)
    }
  </ArtworkLayout>
)

export default Paintings
