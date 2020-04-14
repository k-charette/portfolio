import React from 'react'
import './projects.styles.css'
import ProjectDirectory from '../project-directory/project.directory.component'


const Projects = () => {
    return (
        <>
            <section id='project-container'>
                <div className='projects'>
                    <h1> CHECK OUT MY PROJECTS </h1>
                </div>
                    <ProjectDirectory />    
            </section>
        </>
    )
}

export default Projects