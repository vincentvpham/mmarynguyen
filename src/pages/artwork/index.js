import React from 'react'
import _ from 'lodash'

import Gallery from 'react-photo-gallery'

import Artwork from '../../layouts/Artwork/Artwork'

import { DRAWINGS } from './drawings'
import { PHOTOGRAPHS } from './photographs'
import { PAINTINGS } from './paintings'

import '../../styles/artwork.scss'

const PHOTO_SET = [
  ...DRAWINGS,
  ...PHOTOGRAPHS,
  ...PAINTINGS,
]

const ArtworkPage = () => (
  <Artwork>
    <Gallery photos={_.shuffle(PHOTO_SET)} />
  </Artwork>
)

export default ArtworkPage
