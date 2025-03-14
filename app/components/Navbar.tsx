'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import useTheme from 'next-theme'

const navLabel = ["Home", "Techstack", "Experience", "Blog"]

export const scrollToSection = (id: string) => {
    let label = id.toLowerCase()
    const section = document.getElementById(label);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className='shadow-sm fixed w-full bg-white opacity-90 '>
            <nav className='container mx-auto py-4 flex justify-between px-3'>
                <div className='flex gap-10'>
                    <div className='text-sm uppercase font-extrabold'> tan warut</div>
                    <ul className='flex gap-6 text-sm text-slate-600'>
                        {navLabel.map((label) => (
                            <li key={label} className='cursor-pointer'>
                                <button className='cursor-pointer' onClick={() => scrollToSection(label)}>
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {theme === "dark" ? <MoonIcon className='h-5' onClick={() => setTheme('light')} />
                        : <SunIcon className='h-5' onClick={() => setTheme('dark')} />}
                </div>
            </nav>
        </div>
    )
}

export default Navbar