import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';

import '../styles/base.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar />
    <HomePage />
    <div>
      {children}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
