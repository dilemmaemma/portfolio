import React from 'react';
import axios from 'axios';

import '../../../styles/RenderLandingPage.less';

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { about, education, experience, gitLink, header, latestProject, latestProjects, locationInfo, skills, skillsIntro, languages } from '../../../data/homepage'

function RenderLandingPage(props) {
    const scrollToTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  
    const navigate = useNavigate();
  
    // Destructure useAuth in order to be able to use isAuthenticated call
    const { isAuthenticated } = useAuth0();
    const style = { backgroundColor: '#404C4A', color: '#FFFFFF' };
  
    return (
        <div className="main">
            <div className="lh header">
                <div className="header-text-container">
                    <h1>Emma's Portfolio Page</h1>
                    <h3>
                        This website showcases Emma's projects, whether they be personal, collab, or school related through BloomTech. Thanks for stopping by!
                    </h3>
                </div>
            </div>
            <div className='home-info'>
                <span className='block profile-block'>
                    <img src={header.image} />
                    <div className='profile'>
                        <div>
                            <h1>{header.name}</h1>
                            {header.links.map((link, index) => (
                                <a href={link} key={index}>
                                    {index !== 0 ? ' | ' : ''}
                                    <span>
                                        {header.names[index]}
                                    </span>
                                </a>
                            ))}
                        </div>
                        <div className='special'>
                            <div className='special-category'>
                                <h3>Frontend</h3>
                                <hr />
                                {languages.frontend.map((language, index) => (
                                    <p key={index} className='special-info'>
                                        {language}
                                    </p>
                                ))}
                            </div>
                            <div className='special-category'>
                                <h3>Backend</h3>
                                <hr />
                                {languages.backend.map((language, index) => (
                                    <p key={index} className='special-info'>
                                        {language}
                                    </p>
                                ))}
                            </div>
                            <div className='special-category'>
                                <h3>Frameworks and Dependencies</h3>
                                <hr />
                                {languages.frameworks.map((language, index) => (
                                    <p key={index} className='special-info'>
                                        {language}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </span>
                <div className='container'>
                    <div className='column first-column'>
                        <div className='block'>
                            <h2>About Me</h2>
                            <p>{about}</p>
                        </div>
                    </div>
                    <div className='column second-column'>
                        <div className='block'>
                            <ul className='list-unstyled'>
                                <li>
                                    <svg 
                                        className='svg-inline--fa fa-location-dot' aria-hidden="true" focusable="false" data-prefix="fas" 
                                        data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 384 512" data-fa-i2svg=""
                                    >
                                            <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 
                                                192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 
                                                15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                            />
                                    </svg>
                                        <span>
                                            {locationInfo.city}, {locationInfo.country}
                                        </span>
                                </li>
                                <li>
                                    <svg 
                                        className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" 
                                        data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
                                        data-fa-i2svg=""
                                    >
                                            <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 
                                                313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 
                                                176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" 
                                            />
                                    </svg>
                                    <span>
                                        <a href={`mailto:${locationInfo.email}`} >
                                            {locationInfo.email}
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <svg 
                                        className="svg-inline--fa fa-link" aria-hidden="true" focusable="false" data-prefix="fas" 
                                        data-icon="link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" 
                                        data-fa-i2svg=""
                                    >
                                        <path fill="currentColor" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 
                                            10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 
                                            334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 
                                            7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 
                                            204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 
                                            19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 
                                            1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 
                                            244.3z"
                                        />
                                    </svg>
                                    <span>
                                        <a href={`${locationInfo.github}`}>
                                            {locationInfo.github}
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='column first-column'>
                        <div className='block'>
                            <h2>Latest Projects</h2>
                            <img src={`${latestProject.image}`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px'}} alt='Minesweeper Latest Project' />
                            <div style={{ textAlign: 'center' }}>
                                <h3>{latestProject.name}</h3>
                                <p>{latestProject.description}</p>
                                <br />
                                <a href={`${latestProject.gitLink}`}>
                                    Go to the repo
                                </a>
                            </div>
                            <br />
                            <hr />
                            <div>
                                {latestProjects.map((project, index) => (
                                    <div className='moreProj' key={index}>
                                        <img src={project.image} />
                                        <div className='proj'>
                                            <h3>{project.name}</h3>
                                            <p>{project.description}</p>
                                            <br/>
                                            <a href={project.gitLink}>
                                                <svg 
                                                    className="svg-inline--fa fa-up-right-from-square" 
                                                    aria-hidden="true" focusable="false" data-prefix="fas" 
                                                    data-icon="up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 512 512" data-fa-i2svg=""
                                                >
                                                    <path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 
                                                        34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 
                                                        141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 
                                                        32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 
                                                        14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 
                                                        32-32s-14.3-32-32-32H80z"
                                                    />
                                                </svg>
                                                Find out more
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>                     
                    </div>
                    <div className='column second-column' style={{ marginTop: '-18%', height: '50%'}}>
                        <div className='block'>
                            <h2>Skills</h2>
                            <p>{skillsIntro}</p>
                            <br />
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <h3 className='level-title'>
                                        {skill.skill}
                                        <span className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" >
                                            <svg className="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" 
                                                data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 512 512" data-fa-i2svg=""
                                            >
                                                <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 
                                                    336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 
                                                    24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 
                                                    24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                                                />
                                            </svg>
                                            {skill.knowledge > 89 ? 'Expert' : skill.knowledge > 69 ? 'Pro' : skill.knowledge > 49 ? 'Intermediate' : 'Beginner'}
                                        </span>
                                    </h3>
                                    <div className='level-bar progress'>
                                        <div className='progress-bar level-bar-inner'
                                            role="progressbar" style={{ width: `${skill.knowledge}%`}}
                                            aria-valuenow={skill.knowledge} aria-valuemin='0'
                                            aria-valuemax='100' />
                                    </div>
                                    <br/>
                                </div>
                            ))}
                                <a href={gitLink}>
                                    <svg 
                                        className="svg-inline--fa fa-up-right-from-square" 
                                        aria-hidden="true" focusable="false" data-prefix="fas" 
                                        data-icon="up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 512 512" data-fa-i2svg=""
                                    >
                                        <path fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 
                                            34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 
                                            141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 
                                            32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 
                                            14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 
                                            32-32s-14.3-32-32-32H80z"
                                        />
                                    </svg>
                                    More on GitHub
                                </a>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='column first-column'>

                    </div>
                    <div className='column second-column' style={{ marginTop: '-293%' }}>
                        <div className='block'>
                            <h2>Education</h2>
                            <br/>
                            {education.map((schools, index) => (
                                <div key={index}>
                                    <h3>
                                        <svg className="svg-inline--fa fa-graduation-cap" 
                                            aria-hidden="true" focusable="false" data-prefix="fas" 
                                            data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 640 512" data-fa-i2svg=""
                                        >
                                            <path fill="currentColor" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 
                                                140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 
                                                291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 
                                                448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 
                                                4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 
                                                29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 
                                                12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 
                                                15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 
                                                35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 
                                                6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                                            />
                                        </svg>
                                        {schools.program} {schools.major && `in ${schools.major}`}
                                    </h3>
                                    <p style={{ marginLeft: '10.5%', fontSize: '14px', color: 'grey' }}>
                                        <strong>
                                            {schools.university}
                                        </strong>
                                        &nbsp;
                                        ({schools.years})
                                    </p>
                                    <br/>
                                    <img src={schools.image} alt={schools.university} className='school-img'/>
                                    <br />
                                    <br/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p onClick={() => scrollToTop()} className="back-to-top">
                    Back To Top ^
                </p>
            </div>
        </div>
    );
}

export default RenderLandingPage;