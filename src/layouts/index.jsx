import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../styles/base.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <meta 
      name='viewport' 
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
    />
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    <Navbar />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
