/* eslint-disable */


import React from 'react';

//import BlogList from '../components/BlogList';

export default function Blog({ }) {
  return (
    <div className="city-scape__container">
      <div style={{ width: '100vw', textAlign: 'center' }}>A non-partisan blog on Global Affairs sponsored by The International Relations Council of Berkeley
      </div>
    </div>
  );
}

// export const pageQuery = graphql`
//   query EventsQuery {
//     allMarkdownRemark(
//       filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}
//     ) {
//       edges {
//         node {
//           id
//           html
//           frontmatter {
//             title
//             date
//           }
//         }
//       }
//     }
//   }
// `;
