import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from '../../components/Navigation/Navigation';
import Burger from '../../components/Navigation/Burger/Burger';

import './PageLayout.css';
import './PageLayout.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div className="layout">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Burger title={data.site.siteMetadata.title} />
        <div className="mobile-header">
          <div className="header">Mary Nguyen</div>
          <div className="sub-header">
            Medical illustrator, Animator & Designer
          </div>
        </div>
        <Navigation title={data.site.siteMetadata.title} />
        <div className="main">{children}</div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
