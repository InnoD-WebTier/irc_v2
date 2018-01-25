/* eslint-disable */

import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/footer.scss';

export default class Footer extends Component {
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  componentDidMount() {
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
        </div>
      </div>
    );
  }
}
