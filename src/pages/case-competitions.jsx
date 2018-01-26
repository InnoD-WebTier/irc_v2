import React from 'react';
// import CaseCompetition from '../components/CaseCompetition';
import CaseCompetitionsList from '../components/CaseCompetitionsList';

export default function CaseCompetitions({ data }) {
  const caseCompetitions = data.allMarkdownRemark.edges;
  return (
    <div className="city-scape__container">
      <CaseCompetitionsList comps={caseCompetitions} />
    </div>
  );
}

// eslint-disable-next-line
export const pageQuery = graphql`
  query CaseCompetitionsListQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/case-competitions/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`;
