import React from 'react'
import ExperienceItem from './ExperienceItem'

export default function Experience() {

    const EXPERIENCE = [
        {
            id: 1,
            date: "March 2024 - June 2024",
            title: "Coforge",
            description: "Empleado en prácticas full stack implementando API Rest con sus respectivas páginas web.",
            link: "#"

        },
        {
            id: 2,
            date: "February 2024 - April 2024",
            title: "Grupo Oesía",
            description: "Empleado en prácticas solucionando bugs, desarrollando API Rest, y gestionando algunos servicios de AWS.",
            link: "#"
        }

    ]

    return (

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {EXPERIENCE.map(({ id, date, title, description }) => (
                <li key={id} className='mb-10 ms-4'>
                    <ExperienceItem date={date} title={title} description={description} />
                </li>
            ))}
        </ol>
    )
}
