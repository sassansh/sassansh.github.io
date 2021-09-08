// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#8CA4C0, #8CA4C0, #747F8D, #869F96, #B1C7BD, #B1C7BD',
  firstName: 'Sassan',
  middleName: '',
  lastName: 'Shokoohi',
  message: ' Passionate about changing the world with technology. ',
  icons: [
    {
      image: 'fa-envelope',
      lib: 'fa',
      url: 'mailto:sassansh@student.ubc.ca',
      newTab: false,
    },
    {
      image: 'fa-github',
      lib: 'fab',
      url: 'https://github.com/sassansh',
      newTab: true,
    },
    {
      image: 'fa-linkedin',
      lib: 'fab',
      url: 'https://www.linkedin.com/in/sassanshokoohi/',
      newTab: true,
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/sassansh.png'),
  imageSize: 250,
  message:
    'Hello! My name is Sassan and I’m currently a senior year Computer Science student at the University of British Columbia. I also have a prior Bachelor of Science from UBC in Chemistry, Biology & Environmental Sciences. My love for technology started when I first touched a computer at my dad’s office when I was 7. Fast-forward to today, and I’ve worked on numerous personal projects, developed a healthcare analytics platform for a start-up, and contributed to a student-led mental health web app.',
  resume: require('../editable-stuff/resume.pdf'),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'sassansh', //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/sassansh.png'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: require('../editable-stuff/sassansh.png'),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'JavaScript', value: 90 },
    { name: 'Python', value: 80 },
    { name: 'C / C++', value: 75 },
    { name: 'HTML', value: 80 },
    { name: 'SQL', value: 85 },
    { name: 'CSS', value: 80 },
  ],
  softSkills: [
    { name: 'VS Code', value: 80 },
    { name: 'PyCharm', value: 80 },
    { name: 'Node', value: 80 },
    { name: 'ReactJS', value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I'm currently studying full-time and working part-time! If you know of any available positions for post graduation, have any questions, or if you just want to say hi, please feel free to email me at",
  email: 'sassansh@student.ubc.ca',
};

const experiences = {
  show: true,
  heading: 'Experiences',
  data: [
    {
      role: 'Computer Science TA (CPSC 110)',
      companylogo: require('../assets/img/ubc.png'),
      date: 'September 2019 – Current',
    },
    {
      role: 'Healthcare Software Engineer',
      companylogo: require('../assets/img/xerusmedical.png'),
      date: 'September 2020 – August 2021',
    },
    {
      role: 'Lead Software Engineer',
      companylogo: require('../assets/img/clb.png'),
      date: 'February 2019 – Present',
    },
    {
      role: 'Technical TA (COMM 395)',
      companylogo: require('../assets/img/sauder.png'),
      date: 'August 2017 – April 2020',
    },
    {
      role: 'Database & IT Assistant',
      companylogo: require('../assets/img/ubcpsych.png'),
      date: 'February 2016 – August 2017',
    },
  ],
};

const educations = {
  show: true,
  heading: 'Education',
  data: [
    {
      degree: 'Bachelor of Computer Science',
      major: 'Computer Science & Commerce',
      educationlogo: require('../assets/img/ubc-grey.png'),
      date: 'September 2019 – April 2022',
    },
    {
      degree: 'Bachelor of Science',
      major: 'Chemistry, Biology & Environmental Sciences',
      educationlogo: require('../assets/img/ubc-grey.png'),
      date: 'September 2012 – April 2017',
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  educations,
};
