import React from "react";
import '../styles/organization-photo.scss';

const OrganizationPhoto = (props) => {
  return (
    <div className='organization__photo'>
      <img alt='' src={props.img}></img>
      <div>{props.name}</div>
    </div>
  );
};

export default OrganizationPhoto;
