import React from 'react'

const techStack = [
    { label: "Javascript", imageurl: "/" },
    { label: "Typescript", imageurl: "/" },
    { label: "HTML,CSS", imageurl: "/" },
    { label: "SASS", imageurl: "/" },
    { label: "TAILWIND", imageurl: "/" },
    { label: "REACT", imageurl: "/" },
    { label: "NEXTJS", imageurl: "/" },
    { label: "GIT", imageurl: "/" },
]

const Techstack = () => {
    return (
        <div className='h-screen container flex justify-center pt-44' id='techstack'>
            <div className='text-center '>
                <h1 className='text-4xl font-extrabold text-slate-700'>My Techstack</h1>
                <div>Button Group</div>
                <div className='grid grid-cols-4 gap-4 mt-10'>
                    {techStack.map((stack) => (
                        <div key={stack.label} className='rounded-lg border-2 h-28 px-4'>
                            <div>{stack.label}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Techstack