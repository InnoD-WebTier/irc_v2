import React from 'react';
import Link from 'gatsby-link';
import OfficerPortrait from '../components/OfficerPortrait';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <OfficerPortrait
      name="CatDog"
      img="http://via.placeholder.com/150x150"
    />

    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
