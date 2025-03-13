import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='shadow-sm fixed w-full bg-white bg-opacity-20'>
            <nav className='container mx-auto py-4 flex justify-between px-3'>
                <div className='flex gap-10'>
                    <div className='text-sm uppercase font-extrabold'> tan warut</div>
                    <ul className='flex gap-6 text-sm text-slate-600'>
                        <li >Home</li>
                        <li>Experience</li>
                        <li>Techstack</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    theme
                </div>
            </nav>
        </div>
    )
}

export default Navbar