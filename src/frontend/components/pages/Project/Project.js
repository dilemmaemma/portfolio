import React from 'react';
import { projects } from '../../../data/projects';
import '../../../styles/RenderLandingPage.less'

function Project () {
    return (
        <div className='projects'>
            <div className='project-select'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`selection ${project.construction ? 'construction' : ''}` }
                        style={{ cursor: !project.construction ? 'pointer' : 'default' }} // If construction is false, able to click
                        onClick={!project.construction ? () => onClick(project.name) : null} // If construction is false, next statement runs
                    >
                        <div className='image-container'>
                            {project.image ? 
                                <img
                                    className='image'
                                    src={project.image}
                                    alt={project.name}
                                /> : <img
                                    className='image'
                                    src='https://vitto.cc/wp-content/uploads/2021/10/1_bWy_a-AK77wbOkKJqrWx0g.jpeg'
                                    alt={project.name}
                                />
                            }
                        </div>
                        {project.construction && (
                            <div className='construction-overlay'>
                                <p className='construction-text'>Under Construction</p>
                            </div>
                        )}
                        <div className='info-container'>
                            <p className='title'>{project.name}</p>
                            <p className='info' style={{ flexWrap: true }}>Description: {project.description}</p>
                            <p className='info'>
                                {project.languages.length > 1 ? (
                                    <span>
                                        Languages: 
                                        &nbsp;
                                        {project.languages.map((language, index) => (
                                            <span 
                                                key={index}>
                                                    {index !== 0 && ' | '}
                                                    {language}
                                            </span>
                                        ))}
                                    </span>
                                    ) : (
                                        `Language: ${project.languages}`
                                    )}
                            </p>
                            <p className='info'>
                                {project.dependencies.length > 1 ? (
                                    <span>
                                        Notable Dependencies:
                                        &nbsp; 
                                        {project.dependencies.map((dependency, index) => (
                                            <span 
                                                key={index}>
                                                    {index !== 0 && ' | '}
                                                    {dependency}
                                            </span>
                                        ))}
                                    </span>
                                    ) : ( 
                                        `Notable Dependency: ${project.dependencies}`
                                    )}
                            </p>
                            <p className='info'>Coded By: {project.creator}</p>
                            <p className='info' onClick={() => window.location.href = `${project.gitLink}`}>
                                <a>
                                    Go to GitHub Repository
                                </a>
                                &nbsp;
                                |
                                &nbsp;
                                <a href={project.downloadLink}>
                                    Download Project
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;