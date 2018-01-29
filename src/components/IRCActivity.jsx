import React from "react";
import Link from 'gatsby-link';
import '../styles/ircactivity.scss';


const IRCActivity = (props) => {
  return (
    <div className='IRCActivity'>
      <img className='ActivityLogo' alt='' src={props.img}></img>
      <div className='ActivityTitle'>{props.name}</div>
      <div className='ActivityDescription'>{props.description}</div>
      <div className='ActivityButton'>
        <div className='ButtonTitle2'><Link to={props.link}>More Info</Link></div>
      </div>
    </div>
  );
};

export default IRCActivity;
