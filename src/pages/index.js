import React from 'react'

import Layout from '../components/layout'
import Banner from '../components/Banner/Banner'

import homeBannerImage from '../images/home.png'

const IndexPage = () => (
  <Layout>
    <Banner
      image={homeBannerImage}
      title='Student, Artist & Entrepreneur'
    />
  </Layout>
)

export default IndexPage
