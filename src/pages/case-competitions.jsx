import React from 'react';
// import CaseCompetition from '../components/CaseCompetition';
import CaseCompetitionsList from '../components/CaseCompetitionsList';

export default class CaseCompetitions extends React.Component {
  render() {
    // get data from md files
    const caseCompetitions = [{
      title: "1st Annual IRC Case Competition",
      data: "November 6th, 11AM - 4PM",
      description: "The case competition offers interdisciplinary teams of Berkeley students to develop innovative solutions to the most pressing and significant problems in international relations and developmental politics. The case competition will engage UC Berkeley students on their creativity and analytical skills in a format not commonly found in international relations while also providing increased professional exposure for Berkeley’s international relations programs and the type of skills imparted on their students in an untraditional geographic location for international relations and development politics.",
    },
    {
      title: "1st Annual IRC Case Competition",
      data: "November 6th, 11AM - 4PM",
      description: "The case competition offers interdisciplinary teams of Berkeley students to develop innovative solutions to the most pressing and significant problems in international relations and developmental politics. The case competition will engage UC Berkeley students on their creativity and analytical skills in a format not commonly found in international relations while also providing increased professional exposure for Berkeley’s international relations programs and the type of skills imparted on their students in an untraditional geographic location for international relations and development politics.",
    },
    ];

    return (
      <div className="city-scape__container">
        <CaseCompetitionsList caseCompetitions={caseCompetitions} />
      </div>
    );
  }
}
