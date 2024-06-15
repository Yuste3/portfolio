import React from 'react'
import ExperienceItem from './ExperienceItem'

export default function Experience() {

    const EXPERIENCE = [
        {
            id: 1,
            date: "January 2024 - March 2024",
            title: "Grupo Oesía",
            description: "Empleado en prácticas solucionando bugs, desarrollando API Rest, y gestionando algunos servicios de AWS.",
            link: "#"
        },
        {
            id: 2,
            date: "March 2024 - June 2024",
            title: "Coforge",
            description: "Empleado en prácticas full stack implementando API Rest con sus respectivas páginas web.",
            link: "#"
        }

    ]

    return (

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {EXPERIENCE.map((experience) => (
                <li key={experience.id} className='mb-10 ms-4'>
                    <ExperienceItem date={experience.date} title={experience.title} description={experience.description} />
                </li>
            ))}
        </ol>
    )
}
