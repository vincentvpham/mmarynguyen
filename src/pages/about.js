import React from 'react'

import Layout from '../components/layout'

import Banner from '../components/Banner/Banner'

import aboutBannerImage from '../images/about.jpg'

import '../styles/about.scss'

const AboutPage = () => (
  <Layout>
    <div className='about'>
      <Banner
        image={aboutBannerImage}
      />
      <div>
        <h1>About Mary</h1>
        <div className='description'>
          Born and raised in Wichita, KS, Mary Nguyen is a student, artist and entrepreneur.
          She is currently attending the University of Missouri-Kansas City where she is earning
          her Bachelor of Science in Biology and minoring in Chemistry and Psychology.
          While actively involved in multiple school organizations and keeping up with schoolwork,
          Mary makes time for her other interests such as creating artwork, playing music and
          reading books. With her interests in the arts, Mary launched Out of Line Apparel in 2018
          which features her artwork on clothing, prints and stickers. Intrigued by human behavior,
          motivation and the biological aspects of psychology, she plans on continuing her education
          by attending medical school.
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
