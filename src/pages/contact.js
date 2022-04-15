import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import PageLayout from '../layouts/PageLayout/PageLayout';

import '../styles/contact.scss';

const ContactPage = () => (
  <PageLayout>
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
        <label htmlFor="name">Name*</label>
        <input type="text" name="name" required />
        <label htmlFor="email">Email Address*</label>
        <input type="email" name="email" required />
        <label htmlFor="message">Message*</label>
        <textarea name="message" rows="10" maxlength="5000" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  </PageLayout>
);

export default ContactPage;
