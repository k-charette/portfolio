import React from 'react'
import HeaderComponent from '../../components/header/header.component'
import About from '../../components/about/about.component'
import Projects from '../../components/projects/projects.component'
import Footer from '../../components/footer/footer.component'
import Technology from '../../components/technology/technology.component'

const Homepage = () => {
    return (
        <>
            <HeaderComponent />
                <About />
                <Projects />
                <Technology />
            <Footer/>         
        </>
    )
}

export default Homepage