import React from "react";
import OfficerPortrait from '../components/OfficerPortrait';

const OfficerPortraitGroup = () => {
  // this list will be fed by a officer img data
  const people = [
    {
      name: 'Rose Quartz',
      image: 'http://via.placeholder.com/150x150',
    },
    {
      name: 'Steven Universe',
      image: 'http://via.placeholder.com/150x150',
    },
    {
      name: 'Garnet',
      image: 'http://via.placeholder.com/150x150',
    },
    {
      name: 'Pearl',
      image: 'http://via.placeholder.com/150x150',
    },
    {
      name: 'Amethyst',
      image: 'http://via.placeholder.com/150x150',
    },
    {
      name: 'Lapis Lazuli',
      image: 'http://via.placeholder.com/150x150',
    },
    {
      name: 'Connie',
      image: 'http://via.placeholder.com/150x150',
    },
    {
      name: 'Greg Universe',
      image: 'http://via.placeholder.com/150x150',
    },
    {
      name: 'Peridot',
      image: 'http://via.placeholder.com/150x150',
    },
  ];

  return (
    <div className="">
      {people.map(person => (
        <div className="">
          <OfficerPortrait data={person} />
        </div>
      ))}
    </div>
  );
};

export default OfficerPortraitGroup;
