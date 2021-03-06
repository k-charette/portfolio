import React from 'react'
import profile from '../../images/ken-profile.jpeg'
import resume from '../../Ken-Charette-DevOps-Resume.pdf'


const About = () => {
    return (
        <section id='about-section'>
        <div className='w-full px-6 py-12 bg-gray-100 text-gray-700 text-left'>
            <div className='container max-w-4x1 mx-auto flex justify-center flex-wrap md:flex-no-wrap pt-5'>
                <div className="sm:w-1/2 md:w-1-3 pb-10 md:px-8 md:pt-0 ">
                    <img className='rounded-full h-auto w-32 mx-auto' alt='Pic' src={profile}/>
                </div>
                <div className='w-screen md:w-1-3'>
                    <h2 className='text-3x1 mb-4 text-gray-900 font-medium leading-tight uppercase'>
                        About Me 
                    </h2>
                    <div className='md:w-1-3'>
                    <p className='leading-relaxed mb-10 max-w-xl'>
                        Full Stack Web Developer with a proven ability to build responsive web applications. A self-starter with a passion for learning and coding, eager to apply skills on larger development teams. Motivated to make a difference and continue solving problems. 
                    </p>
                    </div>
                    <div className='container mx-auto'>
                        <div className='max-w-4x1 md:flex justify-between items-center md:text-md md:justify-start'>
                            <div className='w-full md:w-1/2 md-text-left'>
                                <h2 className='text-3x1 mb-4 text-gray-900 leading-tight font-medium uppercase'>Contact Details</h2> 
                            <p className='leading-relaxed mb-5'>
                                <span>The best way to reach me is by e-mail:</span>
                                <br />
                                <span>
                                    <a href='mailto:charettekenneth@gmail.com'>
                                    charettekenneth@gmail.com
                                    </a>
                                </span>
                            </p>
                            </div>
                            <div className='border-2 border-gray-900'>
                                <p className='text-center px-4 py-2 font-extrabold text-lg uppercase'>
                                    <a href={resume} download="Ken-Charette-Full-Stack-Developer-Resume.pdf" rel="noopener noreferrer"target="_blank ">Resume</a>
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div> 
        </section>   
    )
}

export default About