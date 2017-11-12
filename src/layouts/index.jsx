import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

import '../styles/base.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
