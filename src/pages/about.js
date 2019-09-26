import React from 'react'

import Layout from '../components/layout'

import aboutImage from '../images/about.png'

import '../styles/about.scss'

const AboutPage = () => (
  <Layout>
    <div className="about">
      <img src={aboutImage} alt="about mary nguyen" />
      <div>
        <h1>About Mary</h1>
        <div className="description">
          Born and raised in Wichita, KS, Mary Nguyen is a student, artist and
          entrepreneur. She is currently attending the University of
          Missouri-Kansas City where she is earning her Bachelor of Science in
          Biology and minoring in Chemistry and Psychology. She is the founder
          of Out of Line Apparel which features her artwork on clothing, prints
          and stickers. Intrigued by human behavior, motivation and the
          biological aspects of psychology, she hopes to continue her education
          by attending graduate school.
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
