import React from 'react';
import '../styles/CaseCompetition.scss';

// const CaseCompetition = props => (
//   <div className="CaseCompetition">
//     <div className="title">
//       {props.title}
//     </div>
//     <div className="date">
//       {props.date}
//     </div>
//     <div className="description">
//       {props.description}
//     </div>
//   </div>
// );

// CaseCompetition.propTypes = {
//   title: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

const CaseCompetition = props => (
  <div className="CaseCompetition" dangerouslySetInnerHTML={{ __html: props.html }} />

);

export default CaseCompetition;
