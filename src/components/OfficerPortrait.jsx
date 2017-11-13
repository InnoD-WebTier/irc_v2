import React from "react";
import '../styles/officer-portrait.scss';

const OfficerPortrait = (props) => {
  return (
    <div className='officer__portrait'>
      <img alt='fuck linters' src={props.img}></img>
      <div>{props.name}</div>
    </div>
  );
};

export default OfficerPortrait;
