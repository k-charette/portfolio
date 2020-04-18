import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Social = () => {
    return  (
        <>
            <a href='mailto:charettekenneth@gmail.com' rel="noopener noreferrer" target="_blank">
                <IconContext.Provider value={{ className: 'h-8 w-8 mr-4 ml-6 text-gray-100 hover:text-blue-400'}}>
                    <MdEmail />
                </IconContext.Provider>
            </a>
            <a href="https://github.com/k-charette" rel="noopener noreferrer" target="_blank">
                <IconContext.Provider value={{ className: 'h-8 w-8 mr-4  text-gray-100 hover:text-blue-400'}}>
                    <FaGithub />
                </IconContext.Provider>
            </a>
            <a href="https://www.instagram.com/kc_shinrai/" rel="noopener noreferrer" target="_blank">
                <IconContext.Provider value={{ className: 'h-8 w-8 mr-4 text-gray-100 hover:text-blue-400'}}>
                    <FaInstagram />
                </IconContext.Provider>
            </a>
            <a href="https://www.linkedin.com/in/k-charette/" rel="noopener noreferrer" target="_blank">
                <IconContext.Provider value={{ className: 'h-8 w-8 mr-4 text-gray-100 hover:text-blue-400'}}>
                    <FaLinkedinIn />
                </IconContext.Provider>
            </a>
            <a href="https://twitter.com/ItsKenCharette" rel="noopener noreferrer" target="_blank">
                <IconContext.Provider value={{ className: 'h-8 w-8 mr-4 text-gray-100 hover:text-blue-400'}}>
                    <FaTwitter />
                </IconContext.Provider>
            </a>
        </>
    )
}

export default Social