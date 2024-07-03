import React from 'react'
import ReactIcon from '../icons/ReactIcon'

export default function Projects() {

    const TAGS = {
        REACT: {
            name: "React",
            className: "bg-[#003159] text-white",
            icon: ReactIcon
        },
        CSS: {
            name: "CSS",
            className: "bg-[#264de4] text-white",
            icon: ReactIcon
        },
        JAVASCRIPT: {
            name: "JavaScript",
            className: "bg-[#f0db4f] text-black",
            icon: ReactIcon
        }
    }

    const PROJECTS = [
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
            image: "http://placehold.it/300x200",
            tags: [TAGS.REACT, TAGS.CSS, TAGS.JAVASCRIPT]
        },
        {
            id: 2,
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
            image: "http://placehold.it/300x200",
            tags: [TAGS.REACT, TAGS.CSS, TAGS.JAVASCRIPT]
        }
    ]

    return (
        <>
            {PROJECTS.map(({ id, title, description, image, tags }) => (
                <article key={id} className='flex flex-col items-center lg:items-start transition-transform duration-500 ease-in-out transform-center lg:transform-start'>
                    <h3 className='text-2xl font-semibold text-yellow-200 mb-2'>{title}</h3>
                    <p className='text-lg mb-4 text-pretty'>{description}</p>
                    <ul className='flex gap-x-2 flex-row'>
                        {tags.map((tag, index) => (
                            <li key={index}>
                                <span className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2`}>
                                    <tag.icon className="size-4" />
                                    {tag.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <img src={image} alt={`Captura de pantalla del proyecto ${title}`} className='w-[300px] mt-2 mb-4 rounded shadow-2xl shadow-white/10' />
                </article>
            ))}
        </>
    )
}
