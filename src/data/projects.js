/* eslint-disable import/no-anonymous-default-export */

import harryPaccer from '../images/project1.png'
import harryPaccer2 from '../images/project1-1.png'
import harryPaccer3 from '../images/project1-2.png'
import cryptoShow from '../images/project2.png'
import cryptoShow1 from '../images/project2-1.png'
import cryptoShow2 from '../images/project2-2.png'
import deverr from '../images/project3.png'
import deverr1 from '../images/project3-1.png'
import deverr2 from '../images/project3-2.png'
import vine from '../images/project4.png'
import vine1 from '../images/project4-1.png'
import vine2 from '../images/project4-2.png'


export default [
    {
    id: '1',
    project: 'Project One',
    projectType: '7 day Solo Project',
    brief: 'Build a grid-based game using HTML CSS and vanilla JavaScript',
    name: 'Harry Paccer',
    description: 'For project one, I built a Harry Potter themed Pac-Man.',
    technologies: 'In this project I used keyboard events, setTimeouts, setIntervals and arrays methods to control character movement and Game Logic.',
    image: harryPaccer,
    displayImageOne: harryPaccer2,
    displayImageTwo: harryPaccer3,
    githubLink: 'https://github.com/timJFrame/sei-project-1',
    projectLink: 'https://timjframe.github.io/sei-project-1/',
    },
    {
    id: '2',
    project: 'Project Two',
    projectType: '48-hour pair project',
    brief: 'Build a front-end react application that consumes a public API',
    name: 'Crypto Show',
    description: 'My coursemate and I built a cryptocurrency website that allows users to see all cryptocurrencies, find out how much they could have made with Bitcoin or Ethereum at a given period in time, see the tweets from the top four currencies and see the day\'s biggest gainers and losers.',
    technologies: 'React, Axios, Bulma, React Twitter Embed and Sass',
    image: cryptoShow,
    displayImageOne: cryptoShow1,
    displayImageTwo: cryptoShow2,
    githubLink: 'https://github.com/timJFrame/sei-project-2',
    projectLink: 'https://cryptoshow.netlify.app/',
    },
    {
    id: '3',
    project: 'Project Three',
    projectType: '10 day 3-person group project',
    brief: 'Build a full-stack functional MERN application.',
    name: 'Deverr',
    description: 'My team and I built an application called, ‘Dever’ that allowed users to create profiles then either create jobs to bid on or bid on jobs. It was a take on the freelance website ‘Fiver’. I was responsible for building the back-end shell and the majority of the front end.',
    technologies: 'Mongo, Mongoose, Express, React, Node',
    image: deverr,
    displayImageOne: deverr1,
    displayImageTwo: deverr2,
    githubLink: 'https://github.com/timJFrame/sei-project-3',
    projectLink: 'https://deverr-v1.herokuapp.com/',
    },
    {
    id: 4,
    project: 'Project Four',
    projectType: '7 day solo project',
    brief: 'Build a full-stack application using Django, Django REST Framework, PostgreSQL & React',
    name: 'Vine',
    description: 'I built a social networking application for gardeners called, ‘Vine’ that allows a user to create a profile then create posts, comments, like posts, add friends and chat with other users. ',
    technologies: 'Django, Django REST Framework, PostgreSQL, React, Milligram, Framer Motion.',
    image: vine,
    displayImageOne: vine1,
    displayImageTwo: vine2,
    githubLink: 'https://github.com/timJFrame/sei-project-4',
    projectLink: 'https://vine-social-network.herokuapp.com/',
    },
]
