import React from 'react'
import _ from 'lodash'

import Gallery from 'react-photo-gallery'

import Artwork from '../../layouts/Artwork/Artwork'

import { DRAWINGS } from './drawings'
import { PHOTOGRAPHS } from './photographs'
import { PAINTINGS } from './paintings'
import { COMMERCIAL } from './commercial'
import { DIGITAL_ART } from './digital-art'
import { GRAPHIC_DESIGN } from './graphic-design'
import { MURALS } from './murals'

import '../../styles/artwork.scss'

const PHOTO_SET = [...DRAWINGS, ...PHOTOGRAPHS, ...PAINTINGS, ...COMMERCIAL, ...DIGITAL_ART, ...GRAPHIC_DESIGN, ...MURALS]

const ArtworkPage = () => (
  <Artwork>
    <Gallery photos={_.shuffle(PHOTO_SET)} />
  </Artwork>
)

export default ArtworkPage
