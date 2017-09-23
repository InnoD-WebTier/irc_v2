import React from "react";
import '../styles/OfficerPortrait.scss';

const OfficerPortrait = (props) => {
  return (
    <div className='OfficerPortrait'>
      <img alt='fuck linters' src={props.img}></img>
      <div>{props.name}</div>
    </div>
  );
};

export default OfficerPortrait;
