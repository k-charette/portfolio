import React from 'react'
import { FaGithub, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { DiRor } from 'react-icons/di'
import { IconContext } from 'react-icons'

const Technology = () => {
    return (
        <div id='technology-section' className='max-w-7xl px-6 py-12 bg-gray-300'>
            <div className='container max-w-4xl mx-auto text-center pb-10'>
                <h3 className='text-xl md:text-3xl leading-tight text-center max-w-md mx-auto text-gray-900 mb-3 font-medium'>Technology and Skills</h3>
            </div>
            <ul className='container max-w-4xl mx-auto text-center flex flex-wrap items-start'>
                <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                    <IconContext.Provider value={{ className: 'content-center h-24 w-24 w-full' }}>
                        <FaCss3Alt />
                    </IconContext.Provider>
                    <h2 className='text-xl leading-tight mb-2'>CSS</h2>
                </li>
                <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                    <IconContext.Provider value={{ className: 'content-center h-24 w-24 w-full' }}>
                        <FaGithub />
                    </IconContext.Provider>
                    <h2 className='text-xl leading-tight mb-2'>GIT</h2>
                </li>
                <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                    <IconContext.Provider value={{ className: 'content-center h-24 w-24 w-full' }}>
                        <FaHtml5 />
                    </IconContext.Provider>
                    <h2 className='text-xl leading-tight mb-2'>HTML</h2>
                </li>
                <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                    <IconContext.Provider value={{ className: 'content-center h-24 w-24 w-full' }}>
                        <IoLogoJavascript />
                    </IconContext.Provider>
                    <h2 className='text-xl leading-tight mb-2'>JAVASCRIPT</h2>
                </li>
                <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                    <h2 className='text-xl leading-tight mb-2'>GRAPHQL</h2>
                </li>
                <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                    <IconContext.Provider value={{ className: 'content-center h-24 w-24 w-full' }}>
                        <DiRor />
                    </IconContext.Provider>
                    <h2 className='text-xl leading-tight mb-2'>RUBY ON RAILS</h2>
                </li>
                <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                    <IconContext.Provider value={{ className: 'content-center h-24 w-24 w-full' }}>
                        <FaReact />
                    </IconContext.Provider>
                    <h2 className='text-xl leading-tight mb-2'>REACT</h2>
                </li>
            </ul>        
        </div>
    )
}

export default Technology