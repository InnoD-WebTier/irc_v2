import React from 'react';
import EventList from '../components/EventList';

export default class Events extends React.Component {
  render() {
    const events = [{ title: "SELS Speaker Series: Oakland Raiders GC",
      date: "OCT 11",
      info: "Come see Dan Ventrelle, the General Counsel for the Oakland Raiders!" },
    { title: "3rd Annual Sports Industry Conference",
      date: "APR 13",
      info: "Berkeley Law Sports & Law Conference 2017 will take place April 13-14th. Stay tuned for more details!" },
    { title: "SELS Speaker Series: PIXAR",
      date: "FEB 22, 2017",
      info: "Please join SELS as we welcome Jim Kennedy who is the Chief Legal Counsel at PIXAR Animation Studios." }];
    return (
      <EventList events={events} />
    );
  }
}
