import React from 'react'

import Layout from '../components/layout'

import '../styles/contact.scss';

const ContactPage = () => (
  <Layout>
    <div className='contact'>
      <h1>Contact</h1>
      <div className='contact-methods'>
        <div className='method'>
          <div className='platform'>
            E-MAIL
          </div>
          <div className='value'>
            MARYNGUYEN@REBORN.COM
          </div>
        </div>
        <div className='method'>
          <div className='platform'>
            INSTAGRAM
          </div>
          <div className='value'>
            WWW.INSTAGRAM.COM/MMARYNGUYENN
          </div>
        </div>
        <div className='method'>
          <div className='platform'>
            DEPOP
          </div>
          <div className='value'>
            WWW.DEPOP.COM/MMARYNGUYEN
          </div>
        </div>
        <div className='method'>
          <div className='platform'>
            ETSY
          </div>
          <div className='value'>
            WWW.ETSY.COM/PEOPLE/MMARYNGUYEN
          </div>
        </div>
      </div>

      <div className='currently'>
        Mary is currently residing in Kansas City, MO.
      </div>

      <div className='map'>
        <iframe
          title='currently'
          width='100%'
          height='300'
          frameBorder='0'
          src='//www.google.com/maps/embed/v1/place?key=AIzaSyBadiCPcXU36skJ3jMufYRFcvV7vQzIgUc&q=Kansas+City+MO'
          allowFullScreen />
      </div>
    </div>
  </Layout>
)

export default ContactPage
