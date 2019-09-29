import React from 'react'

import ArtworkCategory from '../../components/ArtworkCategory/ArtworkCategory'

import { getTitle } from '../../helpers/artwork'

const req = require.context('../../images/paintings', false, /.*\.png|jpg$/)

export const PAINTINGS = req.keys().map(key => ({
  src: req(key),
  width: 3,
  height: 3,
  title: getTitle(key),
  key,
}))

const Paintings = () => <ArtworkCategory images={PAINTINGS} />

export default Paintings
