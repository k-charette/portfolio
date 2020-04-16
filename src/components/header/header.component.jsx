import React from 'react'
import backgroundImage from '../../images/abstract.jpg'
import { HashLink as Link } from 'react-router-hash-link'

const HeaderComponent = () => {
    return (
        <>
            <div style={{backgroundImage: `url(${backgroundImage})`}} className='w-full h-screen py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10'>
                <header className='w-full px-6 absolute inset-x-0 top-0'>
                    <nav>
                        <div className=''>
                            <Link smooth to='/#about-section'>About</Link>
                            <Link smooth to='/#projects-section'>Projects</Link>

                        </div>
                    </nav>
                </header>
                <div className='container max-w-fx1 mx-auto text-center'>
                    <h1 className='text-4xl leading-tight md:text-5xl text-center text-gray-100 mb-3'>I'm Ken Charette.</h1>
                    <p className='text-md md:text-2xl text-center text-white max-w-md mx-auto mb-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <div className='w-full md:w-full text-center md:text-center py-4 flex flex-wrap justify-center items-stretch md:justify-center md:items-start'>
                        <a className='px-2 md:pl-0 md:mr-3 md:pr-3 text-white'>
                            GitHub
                        </a>
                        <a className='px-2 md:pl-0 md:mr-3 md:pr-3 text-white'>
                            Twitter
                        </a>
                        <a className='px-2 md:pl-0 md:mr-3 md:pr-3 text-white'>
                            Instagram
                        </a>
                    </div>
                    <p className='absolute inset-x-0 bottom-0 text-white pb-8'>
                        Scroll Button Here
                    </p>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent
