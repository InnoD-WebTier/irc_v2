import React from "react";
import '../styles/OrganizationPhoto.scss';
import OrganizationPhoto from '../components/OrganizationPhoto';

const OrganizationPhotoGroup = () => {
  return (
    <div>
      <OrganizationPhoto
        name="BMUN"
        img="http://via.placeholder.com/150x150"
      />
      <OrganizationPhoto
        name="UCBMUN"
        img="http://via.placeholder.com/150x150"
      />
      <OrganizationPhoto
        name="SIP"
        img="http://via.placeholder.com/150x150"
      />
      <OrganizationPhoto
        name="Delta Phi Epsilon"
        img="http://via.placeholder.com/150x150"
      />
      <OrganizationPhoto
        name="Amnesty International"
        img="http://via.placeholder.com/150x150"
      />
    </div>
  );
};

export default OrganizationPhotoGroup;
