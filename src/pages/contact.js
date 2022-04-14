import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';

import '../styles/contact.scss';

const ContactPage = () => (
  <Layout>
    <div className="contact">
      <h1>Contact</h1>
      <div>Let's get in touch.</div>
      <a
        href="mailto:marynguyen@reborn.com"
        target="_blank"
        rel="noreferrer"
        className="email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        marynguyen@reborn.com
      </a>
      <form
        className="contact-form"
        target="_blank"
        action="https://formsubmit.co/marynguyen@reborn.com"
        method="POST"
      >
        <label>Name*</label>
        <input type="text" name="name" required />
        <label>Email Address*</label>
        <input type="email" name="email" required />
        <label>Message*</label>
        <textarea name="message" rows="10" maxlength="5000" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  </Layout>
);

export default ContactPage;
