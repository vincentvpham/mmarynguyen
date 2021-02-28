import React from 'react'

import ArtworkCategory from '../../components/ArtworkCategory/ArtworkCategory'

import { getTitle } from '../../helpers/artwork'

const req = require.context('../../images/graphicDesign', false, /.*\.png|jpg$/)

export const GRAPHIC_DESIGN = req.keys().map((key) => ({
  src: req(key),
  width: 3,
  height: 3,
  title: getTitle(key),
  key,
}))

const graphicDesign = () => <ArtworkCategory images={GRAPHIC_DESIGN} />

export default graphicDesign
