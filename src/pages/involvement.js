import React from 'react'

import Layout from '../components/layout'

import '../styles/involvement.scss'

const InvolvementPage = () => (
  <Layout>
    <div className='involvement'>
      <h1>Involvement</h1>
      <div className='content'>
        <ul>
          <li>
            <span className='where'>UMKC DEPARTMENT OF PSYCHOLOGY</span>
            <span className='what'>RESEARCH ASSISTANT</span>
            <span className='when'>2018-present</span>
          </li>
          <li>
            <span className='where'>ST. LUKES HOSPITAL</span>
            <span className='what'>EMERGENCY DEPARTMENT VOLUNTEER</span>
            <span className='when'>2017-present</span>
          </li>
          <li>
            <span className='where'>GAP</span>
            <span className='what'>SALES ASSOCIATE</span>
            <span className='when'>2016-2017</span>
          </li>
          <li>
            <span className='where'>YOUTH ENTREPRENEURS</span>
            <span className='what'>YE AMBASSADOR</span>
            <span className='when'>2015-2016</span>
          </li>
          <li>
            <span className='where'>FREESTYLE SIGNS CO.</span>
            <span className='what'>GRAPHIC DESIGNER</span>
            <span className='when'>2013-2016</span>
          </li>
          <li>
          ---
          </li>
          <li>
            <span className='where'>UMKC PRE-MEDICAL SOCIETY</span>
            <span className='what'>VICE-PRESIDENT</span>
          </li>
          <li>
            <span className='where'>UMKC PLUS ENERGY</span>
            <span className='what'>SOCIAL MEDIA COORDINATOR</span>
          </li>
          <li>
            <span className='where'>UMKC MINORITY ASSOCIATION OF PRE-MEDICAL STUDENTS</span>
            <span className='what'>MEMBER</span>
          </li>
          <li>
            <span className='where'>UMKC GLOBE MED</span>
            <span className='what'>MEMBER</span>
          </li>
          <li>
            <span className='where'>UMKC BIOLOGICAL STUDENTS GOVERNMENT ASSOCIATION</span>
            <span className='what'>MEMBER</span>
          </li>
          <li>
            <span className='where'>UMKC UNION PROGRAMMING BOARD</span>
            <span className='what'>MEMBER</span>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default InvolvementPage
