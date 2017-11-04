import React from "react";
import '../styles/OrganizationPhoto.scss';

const OrganizationPhoto = (props) => {
  return (
    <div className='OrganizationPhoto'>
      <img alt='' src={props.img}></img>
      <div>{props.name}</div>
    </div>
  );
};

export default OrganizationPhoto;
