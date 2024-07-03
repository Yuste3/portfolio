import React from 'react'
import ExperienceItem from './ExperienceItem'

export default function Experience() {

    const EXPERIENCE = [
        {
            id: 1,
            date: "Marzo 2024 - Junio 2024",
            title: "Coforge",
            description: "Empleado en prácticas full stack implementando API Rest con sus respectivas páginas web.",
            link: "#"

        },
        {
            id: 2,
            date: "Febrero 2024 - Abril 2024",
            title: "Grupo Oesía",
            description: "Empleado en prácticas solucionando bugs, desarrollando API Rest, y gestionando algunos servicios de AWS.",
            link: "#"
        },
        {
            id: 3,
            date: "Octubre 2022 - Actualidad",
            title: "Alcampo",
            description: "Pescadero perfeccionando el trato con el cliente, el trabajo en equipo y el liderazgo de este.",
            link: "#"
        },
        {
            id: 4,
            date: "Septiembre 2016 - Junio 2022",
            title: "Conservatorio Profesional de Danza Carmen Amaya",
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
