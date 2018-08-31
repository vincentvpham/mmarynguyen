import React from 'react'

import Layout from '../components/layout'
import Banner from '../components/Banner/Banner'

import homeBannerImage from '../images/home.png'

const IndexPage = () => (
  <Layout>
    <div className='home'>
      <Banner
        image={homeBannerImage}
        title='Student, Artist & Entrepreneur'
      />
    </div>
  </Layout>
)

export default IndexPage
