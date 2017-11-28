import React from "react";
import '../styles/ircactivity.scss';

const IRCActivity = (props) => {
  return (
    <div className='IRCActivity'>
      <img className='ActivityLogo' alt='' src={props.img}></img>
      <div className='ActivityTitle'>{props.name}</div>
      <div className='ActivityDescription'>{props.description}</div>
      <div className='ActivityButton'>
        <div className='ButtonTitle2'>More Info</div>
      </div>
    </div>
  );
};

export default IRCActivity;
