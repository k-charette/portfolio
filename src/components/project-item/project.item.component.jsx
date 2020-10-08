import React from 'react'
import './project.item.styles.css'

const ProjectItem = () => {
    return(
        <>
            {/*  
    
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
            </div> */}

        <section className="blog text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url("https://i.imgur.com/KU44sHx.png")`}}>

                                <div className="flex flex-col top-2 left-3 absolute items-start"> 
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mt-4 mb-2 '>JavaScript</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>React</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>Tailwind</span>
                                </div>
                            </div>
                            <div className="w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                            
                            <div className="header-content inline-flex ">
                            <div className="category-title text-lg text-black"> Currency Converter</div>
                            </div>
                            <div className="summary-post text-base text-justify">Compare rates from over 30 different countries. This project pulls data provided by the European Central Bank's exchange rates API. 
                            </div>
                                <button className="bg-blue-500 text-blue-100 px-2 mt-4 mr-2 rounded p-2 text-sm"><a href="https://curconverter.netlify.app/" rel="noopener noreferrer" target="_blank" className="hover:text-blue-200">View Live</a></button>
                                <button className="bg-blue-100 text-blue-500 px-2 mt-4 rounded p-2 text-sm"><a href="https://github.com/k-charette/mintbean-currency" rel="noopener noreferrer" target="_blank" className="hover:text-blue-400">View Code</a></button>
                            </div>
                        </div> 
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url("https://i.imgur.com/70VrdcY.png")` }}>
                                <div className="flex flex-col top-2 left-3 absolute items-start"> 
                                    <span className=' bg-white shadow-xl px-2 py-0 ml-2 mt-4 mb-2 '>JavaScript</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>React</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>Tailwind</span>
                                </div>
                            </div>
                                <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                                
                                <div className="header-content inline-flex ">

                                <div className="category-title text-lg text-black"> Civilization Sim</div>
                                </div>
                                <div className="summary-post text-base text-justify">How long can your civilization last? Inspired by the popular video game this project was built as part of a 4hr hackathon. 
                                </div>
                                    <button className="bg-blue-500 text-blue-100 px-2 mt-4 mr-2 rounded p-2 text-sm"><a href="https://civ-sim.netlify.app/" rel="noopener noreferrer" target="_blank"className="hover:text-blue-200">View Live</a></button>
                                    <button className="bg-blue-100 text-blue-500 px-2 mt-4 rounded p-2 text-sm"><a href="https://github.com/k-charette/mintbean-civ" rel="noopener noreferrer" target="_blank" className="hover:text-blue-400">View Code</a></button>
                                </div>
                            </div>  
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url("https://i.imgur.com/Rdd5q6O.png")` }}>
                                <div className="flex flex-col top-2 left-3 absolute items-start"> 
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mt-4 mb-2 '>JavaScript</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>React</span>
                                    
                                </div>
                            </div>

                            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                            
                            <div className="header-content inline-flex ">
                            <div className="category-title text-lg text-black"> Weather Us</div>
                            </div>
                            <div className="summary-post text-base text-justify"> Search the current weather of any city in the world. This project uses weather data from the Open Weather API and built in a day.
                            </div>
                                <button className="bg-blue-500 text-blue-100 px-2 mt-4 mr-2 rounded p-2 text-sm"><a href="https://weather-us.netlify.app/" rel="noopener noreferrer" target="_blank" className="hover:text-blue-200">View Live</a></button>
                                <button className="bg-blue-100 text-blue-500 px-2 mt-4 rounded p-2 text-sm"><a href="https://github.com/k-charette/weather-me" rel="noopener noreferrer" target="_blank" className="hover:text-blue-400">View Code</a></button>
                            </div>
                        </div>  
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url("https://i.imgur.com/VRRZwh0.png")` }}>

                                <div className="flex flex-col top-2 left-3 absolute items-start"> 
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mt-4 mb-2 '>JavaScript</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>React</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>GraphQL</span>
                                </div>
                            </div>

                            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                            
                            <div className="header-content inline-flex ">
                            <div className="category-title text-lg text-black"> Melange </div>
                            </div>
                            <div className="summary-post text-base text-justify">Ever wanted to write reviews about the planets from the sci-fi universe Dune? Well now you can! Built in anticipation of the movie coming out 20??. 
                            </div>
                                <button className="bg-blue-500 text-blue-100 px-2 mt-4 mr-2 rounded p-2 text-sm"><a href="https://melange-dune.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Live</a></button>
                                <button className="bg-blue-100 text-blue-500 px-2 mt-4 rounded p-2 text-sm"><a href="https://github.com/k-charette/melange" rel="noopener noreferrer" target="_blank"className="hover:text-blue-400">View Code</a></button>
                            </div>
                        </div>  
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url("https://i.imgur.com/VML6fMC.png")` }}>

                            <div className="flex flex-col top-2 left-3 absolute items-start"> 
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mt-4 mb-2 '>JavaScript</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>React</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>Redux</span>
                                </div>
                            </div>

                            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                            
                            <div className="header-content inline-flex ">
                            <div className="category-title text-lg text-black"> Crown Shop</div>
                            </div>
                            <div className="summary-post text-base text-justify">An e-commerce project making a functional online clothing store. You can signup, shop through a catalog of clothes, and checkout your order.
                            </div>
                                <button className="bg-blue-500 text-blue-100 px-2 mt-4 mr-2 rounded p-2 text-sm"><a href="https://crwn-shopper.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="hover:text-blue-200">View Live</a></button>
                                <button className="bg-blue-100 text-blue-500 px-2 mt-4 rounded p-2 text-sm"><a href="https://github.com/k-charette/crown-shop" rel="noopener noreferrer" target="_blank" className="hover:text-blue-400">View Code</a></button>
                            </div>
                        </div>  
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url("https://i.imgur.com/VV2gIsN.jpg")` }}>

                            <div className="flex flex-col top-2 left-3 absolute items-start"> 
                                <span className='bg-white shadow-xl px-2 py-0 ml-2 mt-4 mb-2 '>Ruby on Rails</span>
                                <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>JavaScript</span>
                                <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2  '>React </span>
                                </div>
                            </div>

                            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                            
                            <div className="header-content inline-flex ">
                        
                            <div className="category-title text-lg text-black"> Pathways</div>
                            </div>

                            <div className="summary-post text-base text-justify">A bike station lookup service that allows users to search and write reviews about available stations located in the Greater Boston Area. 
                            </div>
                            <button className="bg-blue-500 text-blue-100 px-2 mt-4 mr-2 rounded p-2 text-sm"><a href="http://path-ways.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="hover:text-blue-200">View Live</a></button>
                                <button className="bg-blue-100 text-blue-500 px-2 mt-4 rounded p-2 text-sm"><a href="https://github.com/k-charette/pathways" rel="noopener noreferrer" target="_blank" className="hover:text-blue-400">View Code</a></button>
                            </div>
                        </div>  
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url("https://i.imgur.com/HWsYHa7.jpg")`}}>
                            <div className="flex flex-col top-2 left-3 absolute items-start"> 
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mt-4 mb-2'>Ruby on Rails</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2 '>JavaScript</span>
                                    <span className='bg-white shadow-xl px-2 py-0 ml-2 mb-2 '>React</span>
                                </div>
                            </div>

                            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                            
                            <div className="header-content inline-flex ">
                            <div className="category-title text-lg text-black"> Fruits of the World</div>
                            </div>
                            <div className="summary-post text-base text-justify">Learn about your favorite fruits and discover new ones. Know a fruit you've tried and want to share your experience? Leave a review and let others know! 
                            </div>
                                <button className="bg-blue-500 text-blue-100 px-2 mt-4 mr-2 rounded p-2 text-sm"><a target="_blank" rel="noopener noreferrer" href="http://fruits-of-the-world.herokuapp.com/" className="hover:text-blue-200">View Live</a></button>
                                <button className="bg-blue-100 text-blue-500 px-2 mt-4 rounded p-2 text-sm"><a target="_blank" rel="noopener noreferrer" href="https://github.com/7KAG7/fruits_of_the_world" className="hover:text-blue-400">View Code</a></button>
                            </div>
                        </div>       
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectItem