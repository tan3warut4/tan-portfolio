import React from 'react'
import { ClipboardDocumentListIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid'

const Hero = () => {
    return (
        <div className='h-screen '>
            <div className=' mt-36 max-w-4xl mx-auto'>
                <h2 className='text-4xl font-bold text-slate-700'>Hello world,</h2>
                <h1 className='text-7xl font-extrabold text-slate-700 py-4'>I'm Tan</h1>
                <div className='grid grid-cols-2 gap-5 text-lg text-slate-500 mt-8  '>
                    <div>
                        <article className='tracking-wider'>Hi! I’m a Software Engineer from Thailand,
                            specializing in frontend development and design.
                            Every day, I code, create, and refine to craft the best digital experiences possible.
                            It’s amazing to combine passion and work into something meaningful, don’t you think?
                        </article>
                    </div>
                    <div className='flex flex-col justify-evenly pl-14 text-sm'>
                        <div className='flex gap-4 rounded-2xl p-4 hover:border-2 cursor-pointer border-slate-500 transition-all duration-200 ease-in-out'>
                            <ClipboardDocumentListIcon className='h-5' />Download my resume
                        </div>
                        <div className='flex gap-4 rounded-2xl p-4 hover:border-2 cursor-pointer border-slate-500 transition-all duration-200 ease-in-out'><GlobeAmericasIcon className='h-5' />Let's go through experience </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero