import React from 'react';
import Link from 'gatsby-link';
import OrganizationPhotoGroup from '../components/OrganizationPhotoGroup';

const IndexPage = () => (
  <div>
    <h1>The International Relations Council of Berkeley</h1>
    <p>Facilitating dialogue on global issues between on-campus student organizations.</p>

    <OrganizationPhotoGroup />

    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
