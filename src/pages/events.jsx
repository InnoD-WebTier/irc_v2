/* eslint-disable */

import React from 'react';
import EventList from '../components/EventList';


export default function Events({ data }) {
  const events = data.allMarkdownRemark.edges;
  console.log(events);
  return (
    <EventList events={events} />
  );
}
// export default class Events extends React.Component {
//   render() {
//     const events = 

//     return (
//       <EventList events={events} />
//     );
//   }
// }


export const pageQuery = graphql`
  query EventsQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/events/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
