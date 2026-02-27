/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nishant Narula",
  title: "Hello, I'm Nishant",
  subTitle: emoji(
"I am a passionate Software Developer 🚀 dedicated to building robust, scalable web applications. My expertise lies in architecting distributed systems using Java and JavaScript, with a focus on Spring Boot, Microservices, and REST APIs. I love leveraging Apache Kafka to build real-time communication and exploring cutting-edge frameworks to solve complex engineering challenges."),
  resumeLink:
    "https://drive.google.com/file/d/1fR93--6NWzwgZzqvkQWYzOoEDQagL_-5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nishant2narula",
  linkedin: "https://www.linkedin.com/in/nishant-narula/",
  gmail: "nishant2narula@gmail.com",
  
  
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Senior Software Engineer | Specialist in Java, Spring Boot, & AI-Augmented Workflows",
  skills: [
    emoji(
      "⚡ I specialize in end-to-end development for secure, high-performance REST APIs in Spring Boot and connecting them to dynamic front-ends that make sense for the end user"
    ),
    emoji("⚡ Tech-forward developer who uses tools like GitHub Copilot to speed up the boring stuff, so I can spend more time on system architecture and solving the hard problems."),
    emoji(
      "⚡ Manage CI/CD pipelines for streamlined development and deployment processes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Rest API",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "MicroServices",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Spring-Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of South Florida",
      logo: require("./assets/images/USF.jpg"),
      subHeader: "Master of Science in Information Technology",
      duration: "August 2017 - May 2019",
      desc: "I graduated from the University of South Florida with a 3.95 GPA, focusing my studies on Java development, AWS cloud architecture, and cybersecurity. I pride myself on maintaining academic excellence while building a deep, hands-on technical foundation.",
    },
    {
      schoolName: "Dronacharya College of Engineering",
      logo: require("./assets/images/DCU.webp"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2011 - May 2015",
      desc: "I graduated in the top 10% of my program, balancing my studies with a passion for hackathons and educational programs which helped me to have Hands-on approach in professional environment."    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "60%"
    },
     {
      Stack: "DevOps",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Virtusa - Citi (Client)",
      companylogo: require("./assets/images/Virtusa.png"),
      date: "June 2023 – January 2026",
      desc: "Designed and developed high-availability RESTful APIs using Java and Spring Boot within a microservices ecosystem for enterprise banking workflows.",
      descBullets: [
        "Leveraged the use of GitHub Copilot’s AI-assisted suggestions to implement industry best practices, resulting in more maintainable codebases and a significant reduction in manual debugging time",
        "Collaborated with DevOps to implement automated CI/ CD pipelines via Jenkins; enforced secure coding standards through rigorous code reviews and JUnit/ Mockito testing"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Amgen",
      companylogo: require("./assets/images/Amgen.png"),
      date: "Dec 2019 – May 2023",
      desc: "Developed Spring Boot microservices to process and visualize complex healthcare data, focusing on enterprise-level scalability and maintainability.",
      descBullets: [
        "Worked within cross-functional engineering teams to ensure services were well-integrated into existing platforms while strictly adhering to SDLC processes and Agile methodologies.",
        "Implemented robust backend logic utilizing Spring MVC and Spring Data JPA to support critical healthcare applications."
      ]
    },
    {
      role: "Software Engineer",
      company: "Biorasi",
      companylogo: require("./assets/images/Biorasi.png"),
      date: "July 2019 – Dec 2019",
      desc: "Assisted in the migration of legacy monolithic applications to a modern, microservice-based architecture using the Spring Framework."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(813)585-7729",
  email_address: "nishant2narula@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
