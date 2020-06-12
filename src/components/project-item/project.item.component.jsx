import React from 'react'
import './project.item.styles.css'

const ProjectItem = () => {
    return(
        <>
        <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
                <div className='content shadow-2xl'>
                    <div className='content-overlay'></div> 
                     <img src='https://i.imgur.com/70VrdcY.png' alt='civ' className='w-full h-auto content-image'/>
                     <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Civilization Sim</h3>
                        <a href="https://civ-sim.netlify.app/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>LIVE DEMO</button>
                        </a>
                        <br />
                        <a href="https://github.com/k-charette/mintbean-civ" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 mt-4 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>CODE REPO</button>
                        </a>
                    </div>
                </div>
            </div>
          <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
                <div className='content shadow-2xl'>
                    <div className='content-overlay'></div> 
                     <img src='https://i.imgur.com/rtSWutm.png' alt='weather' className='w-full h-auto content-image'/>
                     <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Weather Us</h3>
                        <a href="https://weather-us.netlify.app/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>LIVE DEMO</button>
                        </a>
                        <br />
                        <a href="https://github.com/k-charette/weather-me" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 mt-4 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>CODE REPO</button>
                        </a>
                    </div>
                </div>
            </div>
             <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
                <div className='content shadow-2xl'>
                    <div className='content-overlay'></div> 
                     <img src='https://i.imgur.com/VRRZwh0.png' alt='melange' className='w-full h-auto content-image'/>
                     <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Melange</h3>
                        <a href="https://melange-dune.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>LIVE DEMO</button>
                        </a>
                        <br />
                        <a href="https://github.com/k-charette/melange" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 mt-4 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>CODE REPO</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
                <div className='content shadow-2xl'>
                    <div className='content-overlay'></div> 
                     <img src='https://i.imgur.com/VML6fMC.png' alt='crown-shop' className='w-full h-auto shadow-md content-image'/>
                     <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Crown Shop</h3>
                        <a href="https://crwn-shopper.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>LIVE DEMO</button>
                        </a>
                        <br />
                        <a href="https://github.com/k-charette/crown-shop" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 mt-4 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>CODE REPO</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4 opacity-125'>  
                <div className='content shadow-2xl'>
                    <div className='content-overlay'></div> 
                    <img src='https://i.imgur.com/VV2gIsN.jpg' alt='pathways' className='w-full h-auto shadow-md content-image'/>
                    <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Pathways</h3>
                        <a href="http://path-ways.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>LIVE DEMO</button>
                        </a>
                        <br />
                        <a href="https://github.com/k-charette/pathways" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 mt-4 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>CODE REPO</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>  
                <div className='content shadow-2xl'>
                    <div className='content-overlay '></div> 
                    <img src='https://i.imgur.com/HWsYHa7.jpg' alt='fruits' className='w-full h-auto shadow-md content-image'/>
                    <div className='content-details fadeIn-top font-sans leading-relaxed text-white'>
                        <h3 className='mb-8 font-semibold text-lg'>Fruits of the World</h3>
                        <a href="http://fruits-of-the-world.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>LIVE DEMO</button>
                        </a>
                        <br />
                        <a href="https://github.com/7KAG7/fruits_of_the_world" rel="noopener noreferrer" target="_blank">
                            <button className='border-2 border-blue-400 px-5 py-1 mt-4 tracking-widest font-medium hover:bg-blue-400 hover:text-white'>CODE REPO</button>
                        </a>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ProjectItem