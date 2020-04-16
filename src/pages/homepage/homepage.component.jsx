import React from 'react'
import Navgiation from '../../components/navigation/navigation.component'
import HeaderComponent from '../../components/header/header.component'
import About from '../../components/about/about.component'
import Projects from '../../components/projects/projects.component'
import Footer from '../../components/footer/footer.component'

const Homepage = () => {
    return (
        <>
            <HeaderComponent />
                <About />
                <Projects />
            <Footer/>         
        </>
    )
}

export default Homepage