import React from 'react';

import ArtworkCategory from '../../components/ArtworkCategory/ArtworkCategory';

import { getTitle } from '../../helpers/artwork';

const req = require.context('../../images/digitalArt', false, /.*\.png|jpg$/);

export const DIGITAL_ART = req.keys().map((key) => ({
  src: req(key).default,
  width: 3,
  height: 3,
  title: getTitle(key),
  key,
}));

const DigitalArt = () => <ArtworkCategory images={DIGITAL_ART} />;

export default DigitalArt;
