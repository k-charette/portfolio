import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navigation = () => {
    const [aboutText, setAboutText] = useState('white')
    const [projectText, setProjectText] = useState(null)
    const [techText, setTechText] = useState(null)
    const [scrollPosition, setScrollPosition] = useState(0)

    //about scroll-628
    //project scroll -652
    //tech scroll -831
    const handleScroll = () => {
        const currentPos = window.pageYOffset
        const aboutPos = 789
        const projectPos = 1290
        const techPos = 1650
        console.log(currentPos)

        if (currentPos >= aboutPos && currentPos < projectPos){
            setAboutText('orange')
        } else {
            setAboutText('white')
        }

        if (currentPos >= projectPos && currentPos < techPos){
            setProjectText('orange')
        } else {
            setProjectText('white')
        }

        if (currentPos >= techPos && currentPos <= 1826){
            setTechText('orange')
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
                    <Link className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400' smooth to='/#home-section'>Home</Link>
                    <Link style={{color: aboutText}} className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400'smooth to='/#about-section'>About</Link>
                    <Link className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400' to='/'>Resume</Link>
                    <Link style={{color: projectText}} className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400' smooth to='/#projects-section'>Projects</Link>
                    <Link style={{color: techText}} className='px-2 md:pl-0 md:mr-3 md:pr-3 hover:text-blue-400 focus:text-blue-400' smooth to='/#technology-section'>Technology</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation