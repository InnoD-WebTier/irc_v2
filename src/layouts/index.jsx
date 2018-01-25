import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../styles/base.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <Navbar />
    {children()}
  	<script>
			if (window.netlifyIdentity) {
				window.netlifyIdentity.on("init", user => {
					if (!user) {
						window.netlifyIdentity.on("login", () => {
							document.location.href = "/admin/";
						});
					}
				});
			}
		</script> 
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
