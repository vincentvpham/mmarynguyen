import React from 'react';

import ArtworkCategory from '../../components/ArtworkCategory/ArtworkCategory';

import { getTitle } from '../../helpers/artwork';

const req = require.context('../../images/drawings', false, /.*\.png|jpg$/);

export const DRAWINGS = req.keys().map((key) => ({
  src: req(key).default,
  width: 3,
  height: 3,
  title: getTitle(key),
  key,
}));

const Drawings = () => <ArtworkCategory images={DRAWINGS} />;

export default Drawings;
