import React from 'react'
import './project.item.styles.css'

const ProjectItem = () => {
    return(
        <>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
                <div className='content'>
                    <a href="https://github.com/k-charette" rel="noopener noreferrer" target="_blank" className=''>
                    <div className='content-overlay'></div> 
                     <img src='https://i.imgur.com/VML6fMC.png' alt='crown-shop' className='w-full h-auto shadow-md content-image'/>
                     <div className='content-details fadeIn-top'>
                         <h3>This is a title</h3>
                         <p>Short description here</p>
                     </div>
                    </a>
                </div>
            </div>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4 opacity-125'>  
                <div className='content'>
                    <a href="https://github.com/k-charette" rel="noopener noreferrer" target="_blank" className=''>
                    <div className='content-overlay'></div> 
                    <img src='https://i.imgur.com/VV2gIsN.jpg' alt='pathways' className='w-full h-auto shadow-md content-image'/>
                    <div className='content-details fadeIn-top'>
                        <h3>This is a title</h3>
                        <p>Short description here</p>
                    </div>
                    </a>
                </div>
            </div>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>  
                <div className='content'>
                    <a href="https://github.com/k-charette" rel="noopener noreferrer" target="_blank" className=''>
                    <div className='content-overlay'></div> 
                    <img src='https://i.imgur.com/HWsYHa7.jpg' alt='fruits' className='w-full h-auto shadow-md content-image'/>
                        <div className='content-details fadeIn-top'>
                            <h3>This is a title</h3>
                            <p>Short description here</p>
                        </div>
                    </a>
                </div>
            </div> 
        </>
    )
}

export default ProjectItem