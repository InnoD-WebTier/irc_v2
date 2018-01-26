/* eslint-disable */

import React from 'react';
import CaseCompetition from '../components/CaseCompetition';
import '../styles/CaseCompetitionsList.scss';


export default function CaseCompetitionsList({ comps }) {
  console.log(comps);
  const caseCompetitions = comps.map(
    competition => (
      <CaseCompetition
        html={competition.node.html}
      />
    )
  );

  return (
    <div className="CaseCompetitionsList">
      {caseCompetitions}
    </div>
  );
}