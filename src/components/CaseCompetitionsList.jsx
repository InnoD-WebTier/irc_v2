import React, { PropTypes } from 'react';
import CaseCompetition from '../components/CaseCompetition';

export default class CaseCompetitionsList extends React.Component {
  render() {
    const caseCompetitions = this.props.caseCompetitions.map(competition => (
      <CaseCompetition
        title={competition.title}
        date={competition.date}
        description={competition.description}
      />
    ));

    return (
      <div className="CaseCompetitionsList">
        {caseCompetitions}
      </div>
    );
  }
}

CaseCompetitionsList.propTypes = {
  caseCompetitions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};
