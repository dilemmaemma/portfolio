import React from 'react';
import { projects } from '../../../data/projects';
import '../../../styles/RenderLandingPage.less'

function Project () {
    return (
        <div className='project-select'>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={`selection ${project.construction ? 'construction' : ''}` }
                    style={{ cursor: !project.construction ? 'pointer' : 'default' }} // If construction is false, able to click
                    onClick={!project.construction ? () => onClick(project.name) : null} // If construction is false, next statement runs
                >
                    <div className='image-container'>
                        <img
                            className='image'
                            src={project.image}
                            alt={project.name}
                        />
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
                            Languages: {project.languages > 1
                            ? project.languages.map((language, index) => (
                                <span key={index}>{language}{index !== project.languages.length - 1 ? '| ' : ''}</span>
                            ))
                            : project.languages}
                        </p>
                        <p className='info'>
                            Notable Dependencies: {project.dependencies > 1
                            ? project.dependencies.map((dependency, index) => (
                                <span key={index}>{dependency}{index !== project.dependencies.length - 1 ? '| ' : ''}</span>
                            ))
                            : project.dependencies}
                        </p>
                        <p className='info'>Coded By: {project.creator}</p>
                        <p className='info'>
                            <a href={project.gitLink}>
                                Go to GitHub Repository
                            </a>
                            &nbsp;
                            <a href={project.downloadLink}>
                                Download Project
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;