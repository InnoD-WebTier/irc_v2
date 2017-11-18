import React from 'react';
import Link from 'gatsby-link';
import OfficerPortrait from '../components/OfficerPortrait';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Our History</h1>
          <p>The International Relations Council (IRC) of Berkeley was founded in Fall 2016 by
            five student organizations: Delta Phi Epsilon, UC Berkeley Model United Nations,
            Berkeley Model United Nations, Sigma Iota Rho, and Amnesty International. The
            mission of the Council is to facilitate dialogue on global issues and encourage
            cooperation between organizations related to the field of international relations.
            In order to raise awareness of global issues and provide students with
            opportunities to engage with international relations, history and politics on a
            professional platform, the IRC of Berkeley hosts several semesterly events,
            including publishing an academic journal and hosting a case competition to foster
            solutions for pressing international issues.</p>
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
