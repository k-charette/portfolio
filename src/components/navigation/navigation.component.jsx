import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navigation = () => {

    return(
        <div>
          <nav className='md:pt-0 relative z-20 navbar-expand-lg'>
                <div className='container my-2 mx-auto max-w-4xl md:flex text-xs sm:text-xs md:text-lg md:justify-start text-gray-100 uppercase font-medium'>
                    <Link className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400' smooth to='/#home-section'>Home</Link>
                    <Link className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400'smooth to='/#about-section'>About</Link>
                    <Link className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400' to='/'>Resume</Link>
                    <Link className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400' smooth to='/#projects-section'>Projects</Link>
                    <Link className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400' smooth to='/#technology-section'>Technology</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation