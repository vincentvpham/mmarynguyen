import React from 'react'

import ArtworkCategory from '../../components/ArtworkCategory/ArtworkCategory'

import { getTitle } from '../../helpers/artwork'

const req = require.context('../../images/photographs', false, /.*\.png|jpg$/)

export const PHOTOGRAPHS = req.keys().map(key => ({
  src: req(key),
  width: 3,
  height: 3,
  title: getTitle(key),
  key,
}))

const Photographs = () => <ArtworkCategory images={PHOTOGRAPHS} />

export default Photographs
