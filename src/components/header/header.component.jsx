import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import backgroundImage from '../../images/abstract.jpg'
import Navigation from '../navigation/navigation.component'
import Social from '../social/social'
import { IconContext } from 'react-icons'
import { IoIosArrowDown } from 'react-icons/io'

const HeaderComponent = () => {
    const [headerStyle, setHeaderStyle] = useState(false)
    
    const handleScroll = () => {
        const position = window.scrollY
        const changePosition = 390
        if (position >= changePosition) {
            setHeaderStyle(true)
        }
        if (position < changePosition)
            setHeaderStyle(false)
    }

    let style = {
        backgroundColor: headerStyle ? 'rgba(45, 55, 72, 1)' : 'transparent',
        transition: '400ms ease',
        position: 'fixed',
        padding: '6px 0 7px 0'
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div id='home-section' style={{backgroundImage: `url(${backgroundImage})`}} className='w-full h-screen py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10'>
                <header style={style} className='w-full flex px-6 pt-4 text-center justify-center items-center fixed inset-x-0 top-0'>
                    <Navigation/>
                </header>
                
                <div className='container max-w-fx1 mx-auto text-center'>
                    <h1 className='text-4xl leading-tight md:text-5xl text-center text-gray-100 mb-3'>I'm Ken Charette.</h1>
                    <p className='text-md md:text-2xl text-center text-white max-w-md mx-auto mb-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <div className='w-full md:w-full text-center md:text-center py-4 flex flex-wrap justify-center items-stretch md:justify-center md:items-start'>
                       <Social />
                    </div>
                    <p className='absolute inset-x-0 bottom-0 text-white pb-0 hover:text-blue-400'>
                        <Link className='px-2 md:pl-0 md:mr-3 md:pr-3'smooth to='/#about-section'>
                            <IconContext.Provider value={{ className: 'content-center h-20 w-20 w-full' }}>
                                <IoIosArrowDown />
                            </IconContext.Provider> 
                        </Link>
                            
                    </p>
                </div>
            </div>   
        </>
    )
}

export default HeaderComponent
