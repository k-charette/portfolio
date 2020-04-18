import React from 'react'
import ProjectDirectory from '../project-directory/project.directory.component'


const Projects = () => {
    return (
        <>
            <div id='projects-section' className='w-full px-6 py-12 bg-white'>
                <div className='container max-w-4x1 mx-auto text-center pb-5'>
                    <h3 className='text-xl md:text-3xl leading-tight text-center max-w-md mx-auto text-gray-900 font-medium uppercase'>Check out my projects</h3>
                </div>
                <div>
                    <ProjectDirectory />
                </div>
            </div>
        </>
    )
}

export default Projects