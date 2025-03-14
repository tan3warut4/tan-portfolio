'use client'
import React from 'react'
import { scrollToSection } from './Navbar'

const ScrollToTop = () => {
    return (
        <div className="fixed bottom-8 hover:bg-slate-100 right-8 w-10 h-10 rounded-full font-extrabold shadow-md cursor-pointer text-center pt-3"
            onClick={() => scrollToSection("home")}
        >
            ^
        </div>
    )
}

export default ScrollToTop