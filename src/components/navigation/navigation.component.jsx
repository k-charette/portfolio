import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navigation = () => {
    const [aboutText, setAboutText] = useState(null)
    const [projectText, setProjectText] = useState(null)
    const [techText, setTechText] = useState(null)

    const handleScroll = () => {
        const currentPos = window.pageYOffset
        const aboutPos = 619
        const projectPos = 1226
        const techPos = 1650

        if (currentPos >= aboutPos && currentPos < projectPos){
            setAboutText('#63b3ed')
        } else {
            setAboutText('white')
        }

        if (currentPos >= projectPos && currentPos < techPos){
            setProjectText('#63b3ed')
        } else {
            setProjectText('white')
        }

        if (currentPos >= techPos && currentPos <= 3268){
            setTechText('#63b3ed')
        } else {
            setTechText('white')
        }   
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div>
          <nav className='md:pt-0 relative z-20 navbar-expand-lg'>
                <div className='container my-2 mx-auto max-w-4xl md:flex text-xs sm:text-xs md:text-lg md:justify-start text-gray-100 uppercase font-medium'>
                    <Link className='px-2 md:pl-0 md:mr-3 md:pr-3 focus:text-blue-400' smooth to='/#home-section'>Home</Link>
                    <Link style={{color: aboutText}} className='px-2 md:pl-0 md:mr-3 md:pr-3 focus:text-blue-400'smooth to='/#about-section'>About</Link>
                    <Link style={{color: projectText}} className='px-2 md:pl-0 md:mr-3 md:pr-3 focus:text-blue-400' smooth to='/#projects-section'>Projects</Link>
                    <Link style={{color: techText}} className='px-2 md:pl-0 md:mr-3 md:pr-3 focus:text-blue-400' smooth to='/#technology-section'>Technology</Link>
                    <a className='px-2 md:pl-0 md:mr-3 md:pr-3 focus:text-blue-400' href='https://pdfhost.io/v/P6T5WnsCh_KennethCharetteFullStackDeveloperResumepdf.pdf' rel="noopener noreferrer" target="_blank">Resume</a>
                </div>
            </nav>
        </div>
    )
}

export default Navigation