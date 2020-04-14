import React, {useState} from 'react'
import PROJECT_DATA from '../../projectData'
import ProjectItem from '../project-item/project.item.component'
import './project.directory.styles.css'

const ProjectDirectory = () => {

    const [projects] = useState([PROJECT_DATA])

    return(
        <div className='directory-menu'>
            {
                projects[0].map(({id, title, imageUrl}) => (
                    <ProjectItem key={id} title={title} imageUrl={imageUrl}/>    
                ))
            }
        </div>
    )
}

export default ProjectDirectory