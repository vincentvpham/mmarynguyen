import React from 'react'

import ArtworkCategory from '../../components/ArtworkCategory/ArtworkCategory'

import { getTitle } from '../../helpers/artwork'

const req = require.context('../../images/murals', false, /.*\.png|jpg$/)

export const MURALS = req.keys().map((key) => ({
  src: req(key),
  width: 3,
  height: 3,
  title: getTitle(key),
  key,
}))

const Murals = () => <ArtworkCategory images={MURALS} />

export default Murals
