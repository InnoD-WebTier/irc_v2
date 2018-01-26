import React from "react";
import '../styles/Event.scss';

const Event = (props) => {
  const createBody = (body) => { return { __html: body }; };

  return (
    <div className='Event'>
      <div className="Event__Header">
        <a href='#' className='Event__Title'> {props.title} </a>
        <span className='Event__Sub'>{props.date}</span>
      </div>
      <div className='Event__Info' dangerouslySetInnerHTML={createBody(props.info)} />
    </div>
  );
};

export default Event;
