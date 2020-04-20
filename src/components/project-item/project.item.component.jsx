import React from 'react'
import './project.item.styles.css'

const ProjectItem = () => {
    return(
        <>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
                <div className='content'>
                    <div className='content-overlay'></div> 
                     <img src='https://i.imgur.com/VML6fMC.png' alt='crown-shop' className='w-full h-auto shadow-md content-image'/>
                     <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Crown Shop</h3>
                        <a href="https://crwn-shopper.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>VIEW SITE</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4 opacity-125'>  
                <div className='content'>
                    <div className='content-overlay'></div> 
                    <img src='https://i.imgur.com/VV2gIsN.jpg' alt='pathways' className='w-full h-auto shadow-md content-image'/>
                    <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Pathways</h3>
                        <a href="http://path-ways.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>VIEW SITE</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>  
                <div className='content'>
                    <div className='content-overlay'></div> 
                    <img src='https://i.imgur.com/HWsYHa7.jpg' alt='fruits' className='w-full h-auto shadow-md content-image'/>
                    <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Fruits of the World</h3>
                        <a href="http://fruits-of-the-world.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>VIEW SITE</button>
                        </a>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ProjectItem