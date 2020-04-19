import React from 'react'
import { FaGithub, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { DiRor } from 'react-icons/di'
import { IconContext } from 'react-icons'
import { Icon } from '@iconify/react'
import graphqlIcon from '@iconify/icons-cib/graphql'
import reduxIcon from '@iconify/icons-cib/redux'

const Technology = () => {
    return (
        <section id='technology-section' className='pt-4 bg-gray-100'>
            <div className='max-w-7xl px-6 py-12'>
                <div className='container max-w-4xl mx-auto text-center pb-10'>
                    <h3 className='text-xl md:text-3xl leading-tight text-center max-w-md mx-auto text-gray-900 mb-3 font-medium uppercase'>Technology</h3>
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
                        <Icon className='content-center h-24 w-24 w-full' icon={graphqlIcon} />
                        <h2 className='text-xl leading-tight mb-2'>GRAPHQL</h2>
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
                        <IconContext.Provider value={{ className: 'content-center h-24 w-24 w-full' }}>
                            <FaReact />
                        </IconContext.Provider>
                        <h2 className='text-xl leading-tight mb-2'>REACT</h2>
                    </li>
                    <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                        <Icon className='content-center h-24 w-24 w-full' icon={reduxIcon} />
                        <h2 className='text-xl leading-tight mb-2'>REDUX</h2>
                    </li>
                    <li className='w-full lg:w-1/3 p-4 md:w-1/3 sm:mx-16 lg:mx-0'>
                        <IconContext.Provider value={{ className: 'content-center h-24 w-24 w-full' }}>
                            <DiRor />
                        </IconContext.Provider>
                        <h2 className='text-xl leading-tight mb-2'>RUBY ON RAILS</h2>
                    </li>
                </ul>        
            </div>
        </section>
    )
}

export default Technology