import React from 'react'

import Layout from '../components/layout'

import '../styles/cv.scss'

const InvolvementPage = () => (
  <Layout>
    <div className="involvement">
      <h1>Work Experience</h1>
      <div className="content">
        <ul>
          <li>
            <span className="where">OUT OF LINE APPAREL</span>
            <span className="what">Founder</span>
            <span className="when">2019-present</span>
          </li>
          <li>
            <span className="where">
              UMKC SCHOOL OF BIOLOGICAL AND CHEMICAL SCIENCES - DR. BOUYAIN LAB{' '}
            </span>
            <span className="what">Laboratory Research Assistant</span>
            <span className="when">2019-2020</span>
          </li>
          <li>
            <span className="where">
              UMKC DEPARTMENT OF PSYCHOLOGY - SILVERROO LAB
            </span>
            <span className="what">Clinical Research Assistant</span>
            <span className="when">2018-2019</span>
          </li>
          <li>
            <span className="where">GRANDPARENTS SUPPORT NETWORK</span>
            <span className="what">Volunteer</span>
            <span className="when">2018-2020</span>
          </li>
          <li>
            <span className="where">
              ST. LUKES HOSPITAL - EMERGENCY DEPARTMENT
            </span>
            <span className="what">Volunteer</span>
            <span className="when">2017-2019</span>
          </li>
          <li>
            <span className="where">GAP</span>
            <span className="what">sales associate</span>
            <span className="when">2016-2017</span>
          </li>
          <li>
            <span className="where">FREESTYLE SIGNS CO.</span>
            <span className="what">graphic designer</span>
            <span className="when">2013-2016</span>
          </li>
          <div className="sub">Professional Development</div>

          <li>
            <span className="where">UMKC ALTERNATIVE SPRING BREAK</span>
            <span className="what">Public Relations</span>
            <span className="when">2019-2020</span>
          </li>
          <li>
            <span className="where">UMKC PRE-MEDICAL SOCIETY</span>
            <span className="what">president</span>
            <span className="when">2019-2020</span>
          </li>
          <li>
            <span className="where">UMKC PRE-MEDICAL SOCIETY</span>
            <span className="what">vice-president</span>
            <span className="when">2018-2019</span>
          </li>
          <li>
            <span className="where">UMKC PLUS ENERGY</span>
            <span className="what">Creative Director 2</span>
            <span className="what">social media coordinator</span>
            <span className="when">2018-2019</span>
          </li>
          <li>
            <span className="where">
              UMKC BIOLOGICAL STUDENTS GOVERNMENT ASSOCIATION
            </span>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default InvolvementPage
