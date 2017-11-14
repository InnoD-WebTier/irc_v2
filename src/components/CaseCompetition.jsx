import React, { PropTypes } from 'react';

const CaseCompetition = props => (
  <div className="CaseCompetition">
    <div className="title">
      {props.title}
    </div>
    <div className="date">
      {props.date}
    </div>
    <div className="description">
      {props.description}
    </div>
  </div>
);

CaseCompetition.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CaseCompetition;
