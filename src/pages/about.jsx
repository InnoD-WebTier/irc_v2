import React from 'react';
import Link from 'gatsby-link';
import OfficerAlbum from '../components/officerPortraitGroup';

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
        <div>
          <OfficerAlbum />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <div>
          <h1>Organizations</h1>
        </div>
        <div>
          <h1>Becoming a Member Organization</h1>
          <p>IRC membership is open to all registered student organizations (RSOs) at Berkeley who
             focus on international affairs and seek to foster cooperation among international
             relations organizations on campus. Organizations interested in joining the IRC must
             submit a formal statement of interest to the Secretary-General detailing their
             international relations focus, their interest and level of involvement in the IRC.
             Please reach out to ircofberkeley@gmail.com to submit a statement of interest, or
             with any questions regarding joining the IRC!</p>
        </div>
      </div>
    );
  }
}
