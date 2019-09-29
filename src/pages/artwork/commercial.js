import React from 'react'

import ArtworkCategory from '../../components/ArtworkCategory/ArtworkCategory'

import { getTitle } from '../../helpers/artwork'

const req = require.context('../../images/commercial', false, /.*\.png|jpg$/)

export const COMMERCIAL = req.keys().map(key => ({
  src: req(key),
  width: 3,
  height: 3,
  title: getTitle(key),
  key,
}))

const Commercial = () => <ArtworkCategory images={COMMERCIAL} />

export default Commercial
