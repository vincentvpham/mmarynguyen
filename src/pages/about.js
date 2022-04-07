import React from 'react';

import Layout from '../components/layout';

import aboutPicture from './about.png';

import '../styles/about.scss';

const AboutPage = () => (
  <Layout>
    <div className="about">
      <div>
        <img className="mary" src={aboutPicture} alt="about mary" />
        <h1>About</h1>
        <div className="description">
          Hi! My name is Mary Nguyen. I am a medical illustrator, animator and
          designer. I graduated from the University of Missouri-Kansas City with
          a Bachelor of Science in Biology and am currently pursuing an MFA in
          Medical Illustration at the Rochester Institute of Technology.
        </div>
        <div className="description">
          My diverse background and skills have given me the opportunity to
          complete various projects. Some include 3D modeling video game assets,
          illustrating work for Chipotle and operating my clothing brand,{' '}
          <a
            href="https://www.outoflineapparel.com"
            target="_blank"
            rel="noreferrer"
          >
            Out of Line Apparel
          </a>
          .
        </div>
        <div className="description">
          As an artist, I find it important to not only create attractive pieces
          but to create work that is clear, innovative, inclusive and impactful.
          With these goals, I am interested in pushing the boundaries and
          expanding my work to AR/VR technology.
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
