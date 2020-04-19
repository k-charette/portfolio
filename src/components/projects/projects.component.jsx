import React from 'react'
import ProjectItem from '../project-item/project.item.component'


const Projects = () => {
    return (
        <>
            <section id='projects-section' className='pt-4 bg-gray-300'>
                <div className='w-full px-8 py-12'>
                    <div className='container max-w-4x1 mx-auto text-center pb-5'>
                        <h3 className='text-xl md:text-3xl leading-tight text-center max-w-md mx-auto text-gray-900 font-medium uppercase'>Check out my projects</h3>
                    </div>
                    <div className='container max-w-4x1 mx-auto text-center flex flex-wrap items-start md:flex-no-wrap'>
                        <ProjectItem />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects