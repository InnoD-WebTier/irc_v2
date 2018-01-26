import React from "react";
import Event from '../components/Event';
import '../styles/EventList.scss';


const EventsList = props => (
  <div className="EventsList">
    {props.events.map((event) => {
      return (<Event
        title={event.node.frontmatter.title}
        subtitle={event.node.frontmatter.subtitle}
        date={event.node.frontmatter.date}
        info={event.node.html}
        url={event.node.frontmatter.url}
      />);
    })}
  </div>
);

export default EventsList;
