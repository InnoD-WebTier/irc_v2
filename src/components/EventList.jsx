import React from "react";
import Event from '../components/Event';

const EventsList = props => (
  <div className="EventsList">
    {props.events.map((event) => {
      return (<Event
        title={event.node.frontmatter.title}
        date={event.node.frontmatter.date}
        info={event.node.html}
      />);
    })}
  </div>
);

export default EventsList;
