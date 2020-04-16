import React from 'react'
import { Link } from 'react-router-dom'
 
const Footer = () => {
    return(
        <footer className='w-full bg-white px-6 border-t'>
            <div className='container mx-auto max-w-4x1 py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm'>
                Placeholder Info here
                <div className='pt-4 md:p-0 text-center md:text-right text-xs'>
                    <a href='' className='text-black no-under-line hover:underline ml-4'>GitHub</a>
                    <a href='' className='text-black no-under-line hover:underline ml-4'>Twitter</a>
                    <a href='' className='text-black no-under-line hover:underline ml-4'>Instagram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer