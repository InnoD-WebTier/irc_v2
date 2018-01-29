import React from "react";
import OfficerPortrait from '../components/OfficerPortrait';
import '../styles/about.scss';
import '../styles/OfficerPortrait.scss';

function importAll(r) {
  const images = {};
  // eslint-disable-next-line
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}


const OfficerPortraitGroup = () => {
  // this list will be fed by a officer img data

  const images = importAll(require.context('../assets/images/Portraits', false, /\.(png|jpe?g|svg)$/));
  const people = [
    {
      name: 'Austin Smith',
      title: 'Secretary General, Alexander Hamilton Society',
      image: images['Austin.jpg'],
      bio: 'Hailing from Huntington Beach, Austin is a third year studying Political Science and History. He joined UCBMUN his freshman spring, serving as Vice Chair for the NFL Owners Committee. During his sophomore year, he served as Head Chair of the FAO Committee. He is currently USG of Specialized Bodies. This academic term, he serves as the vice president for AHS. Last year, he served as the editor in chief of the IRC’s journal. In his spare time, Austin enjoys listening to his favorite artist Eminem, working out, hiking, and reading all kinds of novels from A Thousand Splendid Suns to The Mountain Shadow and the Divergent trilogy. Guess the lie: he’s never attended private school, his oldest nephew is six months younger than him, and he’s worked at Target.',
    },
    {
      name: 'Avdeep Dhillon',
      title: 'Director of Organizational Affairs, Delta Phi Epsilon',
      image: images['Avdeep.jpg'],
      bio: `Avdeep Dhillon is a rising senior at University of California, Berkeley, majoring in Political Economy with a focus on Economic Development and conflict resolution in Middle East. Avdeep is a first generation American born in Punjab, India, and she speaks a host of languages including Punjabi, Hindi, Urdu, Spanish, and is currently learning Arabic. In her free time, you can find Avdeep inventing a new dance choreography, painting or eating (the most likely one)`,
    },
    {
      name: 'Sabrina Paynter',
      title: 'Director of the Journal, Sigma Iota Rho',
      image: 'http://www.acrpl.com.au/wp-content/uploads/2015/02/Placeholder-Portrait.jpg',
      bio: `Sabrina is a senior majoring in Peace and Conflict Studies and Development Studies representing Sigma Iota Rho. She has studied abroad in Ecuador and Japan and has been to over thirty countries. Sabrina speaks four languages and is currently working on her fifth, and in her free time she trains in Muay Thai, Brazilian Jiu-Jitsu and boxing. Two truths and a lie: Sabrina once accidentally hiked a mountain at night, is an only child, and has never tried a Twinkie. Sabrina is from Pleasant Hill, California.`,
    },
    {
      name: 'Zoe Talamantes',
      title: 'Director of the Blog, UCBMUN',
      image: images['Zoe.jpg'],
      bio: 'Zoe is a senior Development Studies Major, with a geographic concentration in Sub-Saharan Africa. Originally from Kampala, Uganda she came to the California, Bay Area in 2013 and is currently director of The IRC blog “The Berkeley Global Citizen”. Working with a passionate team of bloggers, she gets the opportunity to facilitate an online forum engaging in dynamic issues, innovations and processes that shape global society. Zoe discovered the International Relations Council, through UC Berkeley Model United Nations (UCBMUN). On UCBMUN, she is a part of their competitive travel team, and is chairing a committee for their annual conference in March. Outside of the IRC and its related activities, she enjoys working for the UC Berkeley Early-childhood Education Program, volunteering for The Ruhi Institute and going out (or staying in) dancing! Two Truths and a lie: Zoe was born to an American father and Ugandan Mother, has a twin brother, and went to three different high-schools.',
    },
    {
      name: 'Julia Geer',
      title: 'Executive Committee Member, BMUN',
      bio: `My name is Julia Geer and I am a second year Cognitive Science major from Huntington Beach, California.  I am a representative for Berkeley Model UN and help host and chair the annual BMUN conference in March.  I enjoy going to the movies, traveling, and going to the beach with friends and family.  Two truths and a lie:  I have watched the entire series The Office a total of 8 times, I have five siblings, and I have never broke a bone`,
      image: images['Julia.jpg'],
    },
    {
      name: 'Joanna Chen',
      title: 'Executive Committee Member, Amnesty International',
      bio: '',
      image: 'http://www.acrpl.com.au/wp-content/uploads/2015/02/Placeholder-Portrait.jpg',
    },
    {
      name: 'Nicole Timofeevski',
      title: 'IRC Representative, Delta Phi Epsilon',
      bio: "Nicole is a sophomore Global Studies and Slavic Languages & Literatures double major from San Diego, representing UC Berkeley's professional co-ed Foreign Service fraternity, Delta Phi Epsilon. Nicole is interested in domestic immigration policy as well as international conflict resolution, particularly US-Russia and EU-Russia relations. She is obsessed with traveling and understanding other cultures through art and literature, especially having loved her time studying abroad in Portugal. Nicole speaks Russian, English, Spanish, and Portuguese, and in her spare time loves writing poetry, playing the piano, riding her bike, taking pictures, and eating dessert.",
      image: images['Nicole.jpg'],
    },
    {
      name: 'Margaux Payton',
      title: 'IRC Representative, UCBMUN',
      bio: `Margaux is a senior  Political Economy major and Global Poverty and Practice minor, representing UC Berkeley Model UN. In Model UN she travels to collegiate conferences and is chairing a committee this year in UCBMUN's own collegiate conference in March. Margaux loves watching Bollywood movies, playing and dancing to music, and watching VICE episodes. Two truths and a lie: Margaux is the only person in her family with curly hair, went to a high school that got "21 Jump Street", and grew up with 5 dogs. Margaux is from Poway, California, loves the Bay Area and wants to one day move to India to work for a few years before going to graduate school.`,
      image: images['Margaux.png'],
    },
    {
      name: 'Olivia Lipari',
      title: 'IRC Representative, BMUN',
      bio: '',
      image: 'http://www.acrpl.com.au/wp-content/uploads/2015/02/Placeholder-Portrait.jpg',
    },
    {
      name: 'Jeet Rai',
      title: 'IRC Representative, Amnesty International',
      bio: 'Jeet is a second year Political Science major, representing Amnesty International, where she serves as Outreach Director. Jeet is from SoCal and enjoys spending time with family and friends and exploring new places. Two truths and a lie: (1) Hiked the Andes (2) Never been to a concert (3) Knows five languages. She plans to go to Law School and pursue a career as a U.S. ambassador.',
      image: images['Jeet.jpg'],
    },
    {
      name: 'Judy Huang',
      title: 'IRC Representative, Sigma Iota Rho',
      bio: 'Judy is a 4th year majoring in Development Studies who acts as the liaison for Sigma Iota Rho (SIR), an honors club for students in International and Area Studies. She enjoys learning new recipes, watching rain fall from the comfort of her home, and reading. Two truths and a lie: Judy has lived on a farm before, is terrified of heights, and is a dog person. She is from Tracy, California, and hopes to stay in the Bay Area after graduation.',
      image: images['Judy.png'],
    },
  ];

  return (
    <div className="OfficePortraitGroup">
      {people.map(person => (
        <OfficerPortrait data={person} />
      ))}
    </div>
  );
};

export default OfficerPortraitGroup;
