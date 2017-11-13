import React from 'react';
import background from '../assets/images/city-scape-background.png';

export default class CaseCompetition extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="section__header">
            1st Annual IRC Case Competition
          </div>
          <div className="section__subline">
            November 6th, 11AM - 4PM
          </div>
          <div className="section__content">
            The case competition offers interdisciplinary teams of Berkeley
            students to develop innovative solutions to the most pressing and
            significant problems in international relations and developmental
            politics. The case competition will engage UC Berkeley students on
            their creativity and analytical skills in a format not commonly found
            in international relations while also providing increased
            professional exposure for Berkeley’s international relations programs
            and the type of skills imparted on their students in an untraditional
            geographic location for international relations and development
            politics.
          </div>
        </div>
        <img id="city-scape-background" alt="" src={background} />
      </div>
    );
  }
}
