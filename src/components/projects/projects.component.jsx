import React from 'react'
import './projects.styles.css'
import ProjectDirectory from '../project-directory/project.directory.component'


const Projects = () => {
    return (
        <>
            <div className='w-full px-6 py-12 bg-white'>
                <div className='container max-w-4x1 mx-auto text-center pb-10'>
                    <h3 className='text-x1 md:text-3x1 leading-tight text-center max-w-md mx-auto text-gray-900 mb-12'>CHECK OUT MY PROJECTS</h3>
                </div>
                <div>
                    <ProjectDirectory />
                </div>
            </div>
        </>
    )
}

export default Projects