import React from "react";
import '../styles/Event.scss';

const Event = (props) => {
  return (
    <div className='Event'>
      <a href='#' className='Event__Title'> {props.title} | {props.date} </a>
      <p className='Event__Info'> {props.info} </p>
    </div>
  );
};

export default Event;
