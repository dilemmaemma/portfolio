import Minesweep from '../../../styles/Images/MinesweeperClassic.png'
import HumanRights from '../../../styles/Images/HumanRights.jpg'
import bcrypt from '../../../styles/Images/bcrypt-logo.jpg'
import node from '../../../styles/Images/nodejs-header.jpg'
import jest from '../../../styles/Images/Jest.png'
import jwt from '../../../styles/Images/JWT.jpg'
import selfie from '../../../styles/Images/71322555388__22ED2073-00E3-4EDC-ABBC-148634AF6C6E.jpeg'

export const gitLink = 'http://www.github.com/dilemmaemma'

export const about =
    'I am a full-stack developer specializing in React.js '+
    'with an interest in Relational Database Management Systems. '+
    'Getting my coding education at BloomTech, I am privy to working '+
    'under very demanding cicrumstances and in a fast-paced environment. '+
    'Not only did I go from having almost no experience to excelling at '+
    'full-stack JavaScript development, I also learned how to effectively '+
    'learn new tools and languages, and how to apply those in projects. '+
    'I look forward to hearing from you!'

export const header = {
    image: selfie,
    name: 'Emma Henderson',
    title: 'Full-stack Web Developer',
    links: [
        'https://github.com/dilemmaemma',
        'http://linkedin.com/in/emmahtml',
        'https://app.codesignal.com/profile/emmahtml'
    ],
    names: [
        'GitHub',
        'LinkedIn',
        'CodeSignal'
    ]
}

export const skillsIntro = 'I have skills in a variety of front-end and back-end languages and frameworks. '+
                           'Currently, I am working on building that skillset and expanding into C#, Python, and Java.'

export const skills = [ // Beginner: 0-50, Intermediate: 50-70, Pro: 70-90, Expert: 90-100
    {
        skill: 'JavaScript/React',
        knowledge: 90
    },
    {
        skill: 'HTML5, CSS3, & LESS',
        knowledge: 70
    },
    {
        skill: 'SQLite/MySQL/Knex',
        knowledge: 75
    },
    {
        skill: 'Node/Express',
        knowledge: 65
    }
]

export const locationInfo = {
    city: 'Denton',
    state: 'Texas',
    country: 'US',
    email: 'emmaf.henderson@outlook.com',
    github: gitLink,
}

export const latestProject = {
    name: 'Minesweeper',
    description: 'Minesweeper is a logic puzzle video game genre generally played on personal computers. '+
                 'The game features a grid of clickable squares, with hidden "mines" scattered throughout the board. '+
                 'The objective is to clear the board without detonating any mines, with help from clues '+
                 'about the number of neighboring mines in each field. Being programmed in React, this app '+
                 'aims to challenge both front-end and back-end skills, in addition to test the ability of React components.',
    image: Minesweep,
    gitLink: `${gitLink}/minesweeper`,
}

export const latestProjects = [
    {
        name: 'HRF Asylum Grant Rate Tracker',
        description: "This website serves as a global grant rate tracker for all of HRF's asylum cases. "+
                     "It was my job to work on the three tickets given to me for this project - "+
                     "create the landing/home page, create the actual graphical interface, create a profile page, and institute Auth0.",
        image: HumanRights,
        gitLink: `${gitLink}/asylum-rg-fe-starter`
    },
    {
        name: 'Password Hashing and Web Authentication API',
        description: 'API that helps validate user input, storing users username and hashed password in a SQL database through the use of knex and bcryptjs.',
        image: bcrypt,
        gitLink: `${gitLink}/Sprint15-Challenge`
    },
    {
        name: 'Node Server Testing',
        description: 'A rudimentary back-end API for the minesweeper application that is tested using Jest automatic testing to check endpoints and responses.',
        image: node,
        gitLink: `${gitLink}/node-testing2-project`
    },
    {
        name: 'Introduction to Node Server Testing',
        description: 'A basic Jest application to begin my working with Jest. This app challenged me to learn the unit testing framework and learn how to incorporate it in my applications.',
        image: jest,
        gitLink: `${gitLink}/node-testing1-project`
    },
    {
        name: 'JWT Web Authentication API',
        description: 'API that assigns users a JWT to allow them to communicate with restricted routes and access portions of a website that were previously disabled to them',
        image: jwt,
        gitLink: `${gitLink}/node-auth2-project`
    }
]

export const education = [
    {
        university: 'University of North Texas',
        major: 'Finance',
        program: 'BBA',
        years: '2018-2022'
    },
    {
        university: 'BloomTech',
        major: 'Full-Stack',
        program: 'Certificate',
        years: 'May 2023 - October 2023'
    }
]

export const experience = [
    {
        role: 'Trade Operator',
        company: 'Bank of New York Mellon',
        years: '2022 - 2023',
        description: [
            'Spearheaded the loan settlement procedures in Wall Street Office of 250 settlements on average each day, handling a total average of over 300 million dollars daily.',
            'Assisted in the reconciliation procedures of loans through ReconNET to settle improper trades and assist with the upkeep of loan settlement procedures within the institution.',
            'Conducted the month end report and rollover procedure of roughly 1000 sell side loans'
        ]
    },
    {
        role: 'Market Server',
        company: 'Deloitte/Benchmark',
        years: 'March 2022 - September 2022',
        description: [
            'Handled interpersonal communication skills with an average of 200 guests per day, receiving positive feedback for '+
            'my efforts and aiding their needs and doing what I could to make their stay as comfortable as possible.',
            'Honed interpersonal communication and people skills in a fast-paced work environment to guarantee a smooth flow of information from client to personnel. '
        ]
    },
    {
        role: 'IT Technician Level 1',
        company: 'University of North Texas',
        years: '2019 - 2022',
        description: [
            'Provided technical support on Adobe Creative Cloud, Microsoft Suite, Solstice, and Zoom to 8 classes weekly',
            'Facilitated remote technical assistance during the COVID-19 pandemic'
        ]
    }
]