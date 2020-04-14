import React from 'react'
import './project.item.styles.css'

const ProjectItem = ({ title }) => {
    return(
        <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>  
            {title} 
        </div>
    )
}

export default ProjectItem