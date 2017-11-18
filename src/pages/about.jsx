import React from 'react';
import Link from 'gatsby-link';
import OfficerPortrait from '../components/OfficerPortrait';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Our History</h1>
        </div>
        <OfficerPortrait
          name="OfficerOne"
          img="http://via.placeholder.com/150x150"
        />
        <Link to="/page-2/">Go to page 2</Link>
        <div>
          <h1>Organizations</h1>
        </div>
        <div>
          <h1>Becoming a Member Organization</h1>
        </div>
      </div>
    );
  }
}
