/* eslint-disable */

import React from 'react';
import EventList from '../components/EventList';


export default function Events({ data }) {
  const events = data.allMarkdownRemark.edges;
  return (
    <div className="city-scape__container">
      <EventList events={events} />
    </div>
  );
}

export const pageQuery = graphql`
  query EventsQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/events/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            subtitle
            date
            url
          }
        }
      }
    }
  }
`;
