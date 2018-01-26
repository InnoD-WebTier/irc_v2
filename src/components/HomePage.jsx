import React from "react";
import '../styles/homepage.scss';
import OrganizationPhotoGroup from '../components/OrganizationPhotoGroup';
import IRCActivity from '../components/IRCActivity';
import background from '../assets/images/background.png';
import casecomp from '../assets/images/case_competition.png';
import blog from '../assets/images/blog.png';
import journal from '../assets/images/journal.png';

const HomePage = () => {
  return (
    <div>
      <div className='TitleScreen'>
        <img className='Background' src={background} alt='background' />
        <div className='Title'>
          The International Relations Council of Berkeley
        </div>
        <div className='Subtitle'>
          Facilitating dialogue on global issues between on-campus student organizations.
        </div>
      </div>
      <div className='OrgsScreen'>
        <div className='Title'>
          Founded in 2016 by six UC Berkeley student organizations:
        </div>
        <OrganizationPhotoGroup />
        <div className='OurHistory'>
          <div className='ButtonTitle'>Our History</div>
          <div style={{ marginTop: '60px' }}>Placeholder text</div>
        </div>
        <div className='SlantOne'></div>
        <div className='SlantTwo'></div>
        <div className='SlantThree'></div>
      </div>
      <div className='InfoScreen'>
        <div className='Title'>
          What We Do
        </div>
        <IRCActivity
          name="IRC Case Competition"
          description="We invite teams of Berkeley students to develop innovative solutions to
          the most pressing problems in international relations and developmental politics."
          img={casecomp}
          link='/case-competitions'
        />
        <IRCActivity
          name="IRC Blog"
          description="The Global Citizen is a student-run blog about all things international
          relations, updated bi-monthly. We're looking for new contributors!"
          img={blog}
          link='/blog'
        />
        <IRCActivity
          name="IRC Journal"
          description="The International Relations Review of Berkeley is published semesterly.
          This semester's theme is &quot;International Law and Disorder&quot;."
          img={journal}
          link='/irc-journal'
        />
      </div>
    </div>
  );
};

export default HomePage;
