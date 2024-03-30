// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#8CA4C0, #8CA4C0, #747F8D, #869F96, #B1C7BD, #B1C7BD",
  firstName: "Sassan",
  middleName: "",
  lastName: "Shokoohi",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-envelope",
      lib: "fa",
      url: "mailto:sassan_shokoohi@me.com",
      newTab: false,
    },
    {
      image: "fa-linkedin",
      lib: "fab",
      url: "https://www.linkedin.com/in/sassanshokoohi/",
      newTab: true,
    },
    {
      image: "fa-github",
      lib: "fab",
      url: "https://github.com/sassansh",
      newTab: true,
    },
    {
      image: "fa-hackerrank",
      lib: "fa-brands",
      url: "https://leetcode.com/sassansh/",
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
  heading: "About Me",
  imageLink: require("../editable-stuff/sassansh.png"),
  imageSize: 250,
  message:
    "Hello! My name is Sassan and I am a software engineer with expertise in various programming languages including JavaScript, Java, Python, GoLang, and C/C++. I have hands-on experience working with popular frameworks such as React, Redux, Node, Express, and Vue. Also, experienced with various relational and non-relational databases such as MySQL, Postgres, and MongoDB. Throughout my career, I have worked on a range of projects, from developing personal projects to contributing to a healthcare analytics platform for a start-up and collaborating on a mental health web app. My passion for technology dates back to my childhood, and I am constantly seeking new challenges and opportunities to further my skills in this field.",
  //resume: require("../editable-stuff/Sassan Shokoohi - Resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sassansh", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/sassansh.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/sassansh.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "Java", value: 80 },
    { name: "React", value: 75 },
    { name: "MySQL", value: 75 },
    { name: "IntelliJ", value: 80 },
    { name: "HTML/CSS", value: 80 },
    { name: "Python", value: 80 },
    { name: "Go", value: 80 },
    { name: "C/C++", value: 65 },
    { name: "MongoDB", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently working full-time as a Software Engineer at Veeva Systems! If you want to connect, have any questions, or if you just want to say hi, please feel free to email me at",
  email: "sassan_shokoohi@me.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer",
      companylogo: require("../assets/img/veeva.png"),
      date: "March 2023 – Present",
    },
    {
      role: "Associate Software Engineer",
      companylogo: require("../assets/img/veeva.png"),
      date: "February 2023 – March 2023",
    },
    {
      role: "Full Stack Developer",
      companylogo: require("../assets/img/beaty.png"),
      date: "November 2021 – May 2022",
    },
    {
      role: "Undergraduate Teaching Assistant",
      companylogo: require("../assets/img/ubc-cs.png"),
      date: "September 2019 – December 2021",
    },
    {
      role: "Software Engineer",
      companylogo: require("../assets/img/xerusmedical.png"),
      date: "September 2020 – August 2021",
    },
    {
      role: "Lead Software Engineer",
      companylogo: require("../assets/img/clb.png"),
      date: "November 2018 – February 2022",
    },
    {
      role: "Technical Teaching Assistant",
      companylogo: require("../assets/img/sauder.png"),
      date: "August 2017 – April 2020",
    },
    {
      role: "Database & IT Assistant",
      companylogo: require("../assets/img/ubcpsych.png"),
      date: "February 2016 – August 2017",
    },
  ],
};

const educations = {
  show: true,
  heading: "Education",
  data: [
    {
      degree: "Bachelor of Computer Science",
      major: "Computer Science",
      educationlogo: require("../assets/img/ubc-grey.png"),
      date: "UBC",
    },
    {
      degree: "Bachelor of Science",
      major: "Chemistry, Life Sciences, Earth & Environmental Sciences",
      educationlogo: require("../assets/img/ubc-grey.png"),
      date: "UBC",
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
