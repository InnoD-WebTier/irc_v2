import React from "react";
import '../styles/OfficerPortrait.scss';

const OfficerPortrait = (props) => {
  return (
    <div className='OfficerPortrait'>
      <img alt='temp linters' src={props.data.image}></img>
      <div>{props.data.name}</div>
    </div>
  );
};

export default OfficerPortrait;
