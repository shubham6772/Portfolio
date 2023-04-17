 import Jobify from './assets/Jobify.png';
 import Amazon from './assets/Amazon.png';
 import Comfy from './assets/Comfy-Sloth.png';

 
 const FrontendSkill = [
    {
        id: 1,
        name: "HTML",
        level: "Advance",
    },

    {
        id: 2,
        name: "CSS",
        level: "Advance",
    },

    {
        id: 3,
        name: "Javascript",
        level: "Intermediate",
    },

    {
        id: 4,
        name: "React",
        level: "Intermediate",
    },

    {
        id: 5,
        name: "Redux",
        level: "Intermediate",
    },

    {
        id: 6,
        name: "Responsive Designs",
        level: "Intermediate",
    },

]

const BackendSkill = [
    {
      id: 1,
      name: "Node",
      level: "Intermediate",
    },

    {
        id: 2,
        name: "Express",
        level: "Intermediate",
    },

    {
        id: 3,
        name: "MongoDB",
        level: "Intermediate",
    },

    {
        id: 4,
        name: "MySQL",
        level: "Intermediate",
    },

    {
        id: 5,
        name: "REST API",
        level: "Intermediate",
    },

    {
        id: 6,
        name: "Axios",
        level: "Intermediate",
    },

    {
        id: 7,
        name: "PHP and Xamp Server",
        level: "Intermediate",
    },

    {
        id: 8,
        name: "Git and Github",
        level: "Intermediate",
    },

    {
        id: 9,
        name: "Firebase",
        level: "Intermediate",
    }


] 


const services = [
    {
       id:1,
       name:"Develop the user Interface",
    },
    {
        id:2,
        name:"Web Pages Development",
     },
     {
        id:3,
        name:"Static Websites",
     },
     {
        id:4,
        name:"Develop React Web Apps",
     },
     {
        id:5,
        name:"PHP Websites",
     },
     {
        id:6,
        name:"Dynamic Websites",
     },
    
]

const servicesback = [
    {
        id:1,
        name: "Api Development",
    },
    {
        id:2,
        name: "Authentication and Validation",
    },

    {
        id:3,
        name:"Signup and Registration Screens with database connectivity"
    },
    {
       id:4,
       name:"Backend Integration",
    },
    {
        id:5,
        name:"Production Ready Full stack Webapps"
    }

]



const Projects = [
    {
       id: 1,
       title: "E Commerce App",
       category: "app",
       path: Jobify,
      link: 'https://stately-sorbet-60d4f9.netlify.app/',
      github: 'https://github.com/shubham6772/ecommerce-website'
    },
    {
        id: 2,  
        title: "Amazon Clone",
        category: "web",
        path: Amazon,
        link: "https://clone-ef17c.firebaseapp.com/",
        github: "https://github.com/shubham6772/amazon"
    },
    {
        id: 3, 
        title: "Jobify(an internshala clone)",
        category: "app",
        path: Comfy,
        link: 'https://jobify-webapp.onrender.com/landing',
        github: "https://github.com/shubham6772/Jobify-WebApp"
    }
]

const projectNav = [
    {
        id: 1, 
        name: "all",

    },
    {
        id: 2, 
        name: "web",
    },
    {
     id: 3, 
     name: "app",
    }
]


export  {
    FrontendSkill,
    BackendSkill,
    services,
    servicesback,
    Projects,
    projectNav
};