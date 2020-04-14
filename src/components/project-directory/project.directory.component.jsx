import React, {useState} from 'react'
import PROJECT_DATA from '../../projectData'
import ProjectItem from '../project-item/project.item.component'

const ProjectDirectory = () => {

    const [projects] = useState([PROJECT_DATA])

    return(
        <div className='container max-w-4x1 mx-auto text-center flex flex-wrap items-start md:flex-no-wrap'>
            {
                projects[0].map(({id, title, imageUrl}) => (
                    <ProjectItem key={id} title={title} imageUrl={imageUrl}/>    
                ))
            }
        </div>
    )
}

export default ProjectDirectory