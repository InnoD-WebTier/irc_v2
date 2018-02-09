import React from "react";
import Link from 'gatsby-link';
import '../styles/ircactivity.scss';


const IRCActivity = (props) => {
  let ActivityLink = () => <Link to={props.link}>More Info</Link>;
  if (props.external) { ActivityLink = () => <a href={props.link}>More Info</a>; }
  return (
    <div className='IRCActivity'>
      <img className='ActivityLogo' alt='' src={props.img}></img>
      <div className='ActivityTitle'>{props.name}</div>
      <div className='ActivityDescription'>{props.description}</div>
      <div className='ActivityButton'>
        <div className='ButtonTitle2'>
          <ActivityLink />
        </div>
      </div>
    </div>
  );
};

export default IRCActivity;
