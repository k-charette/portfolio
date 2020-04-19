import React from 'react'
import Social from '../social/social'
 
const Footer = () => {
    return(
        <footer className='w-full bg-gray-900 px-6'>
            <div className='container mx-auto max-w-4x1 py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm text-gray-100'> 
                <div className='w-full md:w-full text-center md:text-center py-4 flex flex-wrap justify-center items-stretch md:justify-center  md:items-start'>
                    <Social />
                </div>
            </div>
        </footer>
    )
}

export default Footer