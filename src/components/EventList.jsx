import React from "react";
import Event from '../components/Event';

const EventsList = props => (
  <div className="EventsList">
    {props.events.map((event) => {
      return <Event title={event.title} date={event.date} info={event.info} />;
    })}
  </div>
);

export default EventsList;
