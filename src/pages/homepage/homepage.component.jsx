import React from 'react'
import HeaderComponent from '../../components/header/header.component'
import About from '../../components/about/about.component'
import Projects from '../../components/projects/projects.component'

const Homepage = () => {
    return (
        <>
            <div className='flex flex-wrap grid grid-rows-3'>
            <HeaderComponent />
                <About />
                <Projects />
            </div>
        </>
    )
}

export default Homepage