import React from "react";
import '../styles/homepage.scss';
import background from '../assets/images/background.png';

const HomePage = () => {
  return (
    <div className='TitleScreen'>
      <img className='Background' src={background} alt='background' />
      <div className='Title'>
        The International Relations Council of Berkeley
      </div>
      <div className='Subtitle'>
        Facilitating dialogue on global issues between on-campus student organizations.
      </div>
    </div>
  );
};

export default HomePage;
