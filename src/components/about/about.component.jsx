import React from 'react'
import profile from '../../images/ken-profile.jpeg'

const About = () => {
    return (
        <>
            <div className='w-full px-6 py-12 bg-gray-300  text-gray-700'>
                <div className='container max-w-4x1 mx-auto flex justify-center flex-wrap md:flex-no-wrap'>
                    <div className="sm:w-1/2 md:w-2-3  pb-10 md:px-6 md:pt-0">
                        <img className='rounded-full h-auto w-32' alt='Pic' src={profile}/>
                    </div>
                    <div className='w-full md:w-1-3'>
                        <h2 className='text-3x1 mb-8 text-black leading-tight'>
                            About Me 
                        </h2> 
                        <p className='font-sans leading-relaxed mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    <div>
                        <h2 className='text-3x1 mb-8 text-black leading-tight'>Contact Details</h2> 
                        <p className='font-sans leading-relaxed mb-5'>
                            <span>Ken Charette</span>
                            <br />
                            <span>
                                39 Ocean Avenue
                                <br/>
                                Salem, MA 01970
                            </span>
                            <br />
                            <span>charettekenneth@gmail.com</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-center mb-6'>
                            Download Resume
                        </p>
                    </div> 
                    </div>
                </div>
            </div>    

        </>
    )
}

export default About