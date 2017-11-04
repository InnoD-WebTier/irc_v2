import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import logo from '../assets/logo.png';
import '../styles/navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      maxHeight: 50,
    };

    this.handleNavOpen = this.handleNavOpen.bind(this);
  }

  handleNavOpen(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div>
        <Headroom
          wrapperStyle={{
            maxHeight: this.state.maxHeight,
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.99)',
          }}
        >
          <div
            className={classNames('navbar', {
              'navbar--open': this.state.open,
            })}
          >
            <div className="logo">
              <Link to="/" className="link">
                <img src={logo} alt="logo" className="logo__image" />
              </Link>
            </div>
            <div
              className={classNames('links', 'navbar__hamburger', {
                'navbar__hamburger--active': this.state.open,
              })}
              onClick={this.handleNavOpen}
            >
              <div className="hamburger__bar bar" />
              <div className="hamburger__bar bar" />
              <div className="hamburger__bar bar" />
            </div>
            <div className="links" onClick={this.handleNavOpen}>
              <Link to="about" className="link">
                About
              </Link>
              <Link to="events" className="link">
                Events
              </Link>
              <Link to="case-competition" className="link">
                Case Competition
              </Link>
              <Link to="blog" className="link">
                Blog
              </Link>
              <Link to="irc-journal" className="link">
                IRC Journal
              </Link>
            </div>
          </div>
        </Headroom>
      </div>
    );
  }
}
