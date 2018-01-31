/* eslint-disable */

import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/footer.scss';

export default class Footer extends Component {
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  componentDidMount() {
    if (document.location.href.indexOf('ocf') > -1) {
      document.location.href = 'https://ircb.berkeley.edu';
    }
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="media">
          <a href="https://www.facebook.com/groups/139920413179840/" target="_blank" rel="noopener noreferrer">
            <FontAwesome
              className="fb__icon"
              name="facebook"
            />
          </a>
          <a href="mailto:ircofberkeley@gmail.com" target="_top" rel="noopener noreferrer">
            <FontAwesome
              className="mail__icon"
              name="envelope-o"
            />
          </a>
          <a href="https://www.ocf.berkeley.edu" className="ocf">
            <img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg"
        alt="Hosted by the OCF" style={{border: 0}} />
          </a>

        </div>
        <div className="disclaimer">
        <span>We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.</span>
        </div>
      </div>
    );
  }
}
