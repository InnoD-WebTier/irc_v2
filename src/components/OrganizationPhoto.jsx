import React from "react";
import '../styles/OrganizationPhoto.scss';

const OrganizationPhoto = (props) => {
  return (
    <div className='OrganizationPhoto'>
      <img className='OrgImage' alt='' src={props.img}></img>
      <div className='OrgHover'>
        <div className='HoverTitle'>{props.name}</div>
        <div className='HoverDescription'>{props.description}</div>
        <div className='HoverMedia'></div>
      </div>
    </div>
  );
};

export default OrganizationPhoto;
