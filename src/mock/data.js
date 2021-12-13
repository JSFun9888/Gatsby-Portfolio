import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Jaime',
  subtitle: 'A Medical Scientist turned Computer Scientist.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Medical Scientist turned Computer Scientist. A professionally minded individual used to working in high stakes and high pressure medical environments. Fascinated by technology and have found a new direction with Software Engineering. Would love to help build technology that positively contributes to the well being of others whether medical applications or otherwise.',
  paragraphTwo: 'I\m a current student at Macquarie University studying software engineering and about to start my 3rd year. My interest areas include Machine Learning, IoT applications, Web Technologies and Mobile Development. My programming languages of choice include Java, Javascript and Python.',
  paragraphThree: 'My best achievements so far in my current degree is earning high distinctions in the following subjects: Intro to computer programming, Fundamentals of Computer Science, IT and Society and Data Communications. I have also achieved distinctions in the following subjects: Algorithms and Data Structures, Introduction to Database Design and Management and Introduction to Business Information Systems.',
  resume: 'resume.PNG', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'BORED.png',
    title: 'Bored',
    info: 'A group web dev project where we are to create a website of our choosing and deliver weekly sprint reports based on our progress each week. My group is creating a website where "Bored" people can come and find activities to fill their time. Users can generate activities which are obtained through the Bored api, are able to create user profiles to save activities and even compete on our leaderboard to complete the most activities! We are using React.js for the frontend, Express and MongoDB for the backend and database respectively.',
    info2: 'You can check out the website below!',
    url: ' https://shrouded-hollows-90470.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PEXPRESS.PNG',
    title: 'Poem Express',
    info: 'A class project where we were tasked to create a poetry sharing website using React.js for the frontend and Express for the backend server. Users can share their own poetry to the website and also vote for poems that they like.',
    info2: 'You can check out the website below!',
    url: 'https://poem-express-js.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RAV.PNG',
    title: 'Ravenous',
    info: 'A project completed through CodeCademy where I created a website where users can search for restaurants based on searchable criteria and then it will return a list of restaurants matching the criteria along with a star rating obtained through the Yelp api.',
    info2: 'You can check out the website below!',
    url: 'https://ravenous-js.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'MQAT.PNG',
    title: 'MQ-ATS (Macquarie Autonomous Transit System: Monorail)',
    info: 'A vertically integrated group project to build an autonomous transit system. The vehicle we created was a monorail that traversed along a rail, delivering a payload to 3 destination stations.',
    info2: 'My group (T1C1) was responsible for the creation of the state machine and we had a great time trying to complete this project over the 13 week semester.',
    url: 'https://youtu.be/P-p-UXXPsso',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TTT.PNG',
    title: 'Computer AI for Tic Tac Toe game',
    info: 'This mini project of mine was to try and create a working AI for the game Tic Tac Toe. I used the minimax alogorithm for the computers logic and I plan on implementing alpha beta pruning in the future.',
    info2: 'I was inspired to create a game AI after watching The Queens Gambit and remembering my interest in AI\'s, so I tried my hand at making one! Press the link below to see the youtube video that gave me the help I needed to create this!',
    url: 'https://youtu.be/trKjYdBASyQ',
    repo: 'https://github.com/JSFun9888/TicTacToe', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jsfun9888@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jaime-sun-709a8a182/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JSFun9888',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
