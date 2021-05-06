// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false
};

const greeting = {
  username: "Belhassen Essid",
  title: "Hi all, I'm Belha",
  subTitle: emoji(
    "A passionate Google community leader and Computer Science student-entrepreneur at ISI 🚀 I like to approach data and software to find problems and design solutions. I focus on building amazing teams and adapting quickly to new learning and methodologies, I enjoy meeting new people and hearing new perspectives, so get in touch now :"
  ),
  resumeLink:
    "https://drive.google.com/file/d/15B-o8FzVPWZFcugbveh-6Rj1Eer8UQGc/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/belhassenessid",
  linkedin: "https://www.linkedin.com/in/belhassen-essid/",
  gmail: "essidbelhassan@gmail.com",
  facebook: "https://www.facebook.com/saad.pasta7",
  stackoverflow: "https://stackoverflow.com/users/14138609/essid-belhassen",
  instagram: "https://www.instagram.com/belha_essid/",
  twitter: "https://twitter.com/belha_essid",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CREATIVE LEADER WHO WANTS TO EXPLORE EVERY NEW TECH AND METHODOLOGY",
  skills: [
    emoji(
      "⚡ Design and Develop tech-based solutions for businesses as part of student-entrepreneurs group"
    ),
    emoji(
      "⚡ Manage the Software Development Process form idea to market through methodoligies such as Design thinking ans Agile-Scrum"
    )
  ],

  //https://fontawesome.com/icons?d=gallery

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "MicroStrategy Desktop",
      fontAwesomeClassname: "far fa-chart-bar"
    },
    {
      skillName: "openERP",
      fontAwesomeClassname: "fas fa-tasks"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName:
        "Higher Institute of Computer Science, University of Tunis El Manar",
      logo: require("./assets/images/isi.png"),
      subHeader:
        "Bachelor of Computer Science (Software and Information Systems Engineering)",
      duration: "September 2019 - June 2022",
      desc:
        "Ranked top 10% in the first year program. Took courses about Algorithms and Complexity, Operating Systems, DataBases and Networking Fundamentals...",
      descBullets: [
        "co-founding and leading a Google Developers Student Club on my campus",
        "being an active member during certain periods in certain clubs such as Freeways and Artbox"
      ]
    },
    {
      schoolName: "El Mourouj2 High School",
      logo: require("./assets/images/mrj2.jpg"),
      subHeader: "Baccalauréat of Mathematics (High School Diploma)",
      duration: "September 2018 - June 2019",
      desc: "The valedictorian of my school promotion"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Data and Business Intelligence",
      progressPercentage: "90%"
    },
    {
      Stack: "Software Design and Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Algorithms and Problem Solving",
      progressPercentage: "60%"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead",
      company: "Google Developers",
      companylogo: require("./assets/images/GoogleDev.png"),
      date: "August 2020 – Present",
      desc:
        "GDSC Leads may be pursuing various degrees but recruited by Google and have a good foundational knowledge of software development concepts.\n",
      descBullets: [
        "I helped increase students' knowledge of new technologies (cloud, data science...) and soft skills, and helped in featuring and teaching Google Developers technologies."
      ]
    },
    {
      role: "Intern",
      company: "ComunikCRM",
      companylogo: require("./assets/images/communikCRM.png"),
      date: "July 2020 – September 2020",
      desc:
        "Leading the creation of the BI end-user application (Data Visualization and Dashboard Design)",
      descBullets: [
        "Business specifications understanding to solve problems",
        "BI dashboard design and development to meet requirements",
        "Data manipulation and web dashboard application development with Python"
      ]
    }
  ]
};

// Some Projects

const SomeProjects = {
  showGithubProfile: "true",
  display: true
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
  display: false
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DSC Weekend Tunisia - ML Hackathon",
      subtitle:
        "Organized with 10 other Google DSC Leads from Tunisia, the first NLP Hackathon on Zindi organized 100% by students in the region with a total prizes of 1200dt",
      image: require("./assets/images/dscweekend.jpg"),
      footerLink: [{name: "Event", url: "https://fb.me/e/1JLoOe0Jy"}]
    },
    {
      title: "Introduction to Design Thinking and Agile Development",
      subtitle:
        "Completed Certifcation from BambooGeeks for Employability and Development Methodologies",
      image: require("./assets/images/bambooGeeks.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/15NjrKU4q_feQEBJhHH8vAVqw3bYDE1ng/view?usp=sharing"
        }
      ]
    },
    {
      title: "Technical Support Fundamentals",
      subtitle:
        "Completed Certifcation from Google for Customer Support and Troubleshooting Fundamentals",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/56a55350169304fcc589e1997643c58e"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
      title: "The Developer Starter Pack",
      subtitle: "Software Dev Workshop at GDSC ISI",
      slides_url:
        "https://docs.google.com/presentation/d/1k5gELKQ4IFxd9Ir9InPjrXtSxalaO2WnN7G_vjH7vOs/edit?usp=sharing",
      event_url:
        "https://dsc.community.dev/events/details/developer-student-clubs-higher-institute-of-computer-science-ariana-presents-developer-starter-pack/"
    },
    {
      title: "Get started with Python",
      subtitle: "Python Workshop at GDSC ISI",
      slides_url:
        "https://docs.google.com/presentation/d/1gArPkSm-muXsfuXIVS5IFHqyorJTP9cfqaR78ep3y7Y/edit?usp=sharing",
      event_url:
        "https://dsc.community.dev/events/details/developer-student-clubs-higher-institute-of-computer-science-ariana-presents-get-started-with-python/"
    },
    {
      title: "What is Google DSC Program",
      subtitle: "Info Session at GDSC ISI",
      event_url:
        "https://docs.google.com/presentation/d/18306D9C8B1MKBTqpB4GhymUCQXhTiysZUvi1V8esd30/edit?usp=sharing"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+216) 27 241 739",
  email_address: "essidbelhassan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "belha_essid",
  display: true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  SomeProjects,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
