'use client'
import { ClipboardDocumentListIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { scrollToSection } from './Navbar'


export const Hero = () => {
    return (
        <div className='h-screen' id='home'>
            <div className=' pt-36 max-w-4xl mx-auto'>
                <div className='grid grid-cols-2'>
                    <div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='text-4xl font-bold text-slate-700'>
                            Hi,
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className='text-7xl font-extrabold text-slate-700 py-4'>
                            I'm Tan
                        </motion.h1>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5 text-lg text-slate-500 mt-8  '>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}>
                        <article className='tracking-wider'>Hi! I’m a Software Engineer from Thailand,
                            specializing in frontend development and design.
                            Every day, I code, create, and refine to craft the best digital experiences possible.
                            It’s amazing to combine passion and work into something meaningful, don’t you think?
                        </article>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className='flex flex-col justify-evenly pl-14 text-sm'>
                        <button className='flex gap-4 rounded-2xl p-4 hover:border-2 cursor-pointer
                         border-slate-500 transition-all duration-200 ease-in-out active:bg-slate-200'>
                            <a href='/Warut_Watt_Frontend-developer.pdf' className='flex gap-4' download="tan-warut-resume.pdf">
                                <ClipboardDocumentListIcon className='h-5' />Download my resume
                            </a>
                        </button>
                        <button className='flex gap-4 rounded-2xl p-4 hover:border-2 cursor-pointer
                         border-slate-500 transition-all duration-200 ease-in-out active:bg-slate-200 '>
                            <GlobeAmericasIcon className='h-5' />Let's go through experience
                        </button>
                    </motion.div>
                </div>
                <div className='flex justify-center pt-10 cursor-pointer' onClick={() => scrollToSection("TechStack")}>
                    <span className="w-[2.5px] h-[10px] rounded-xl bg-slate-500 m-0.5 -rotate-45 animate-pulse"></span>
                    <span className="w-[2.5px] h-[10px] rounded-xl bg-slate-500 m-0.5 rotate-45  animate-pulse "></span>
                </div>
            </div>
            <hr className='text-slate-100 mt-32'></hr>
        </div>
    )
}