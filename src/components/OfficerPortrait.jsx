import React from "react";
import '../styles/OfficerPortrait.scss';

const OfficerPortrait = (props) => {
  return (
    <div className='OfficerPortrait'>
      <img alt='temp linters' src={props.data.image}></img>
      <div className='OfficerInfo'>
        <h2>{props.data.name}</h2>
        <h3>{props.data.title}</h3>
        <div className='OfficerBio'>{props.data.bio}</div>
      </div>
    </div>
  );
};

export default OfficerPortrait;
