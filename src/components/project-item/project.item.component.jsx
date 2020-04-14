import React from 'react'
import './project.item.styles.css'

const ProjectItem = ({ title }) => {
    return(
        <div className='project-item'>  
            <div className='project-content'>
               {title} 
            </div>
        </div>
    )
}

export default ProjectItem