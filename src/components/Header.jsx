import React from 'react'


export default function Header() {
    return (
        <>
            <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 '>
                <nav className='flex px-3 text-sm font-medium rounded-full  text-gray-600 dark:text-gray-200 justify-center items-center ring-1 shadow-lg backdrop-blur dark:bg-gray-800/90 bg-white/50 ring-white/10'>
                    <a href="#experience" className='relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400'>Experiencia</a>
                    <a href="#projects" className='relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400'>Proyectos</a>
                    <a href="#about" className='relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400'>Sobre mí</a>
                    <a href="#contact" className='relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400'>Contacto</a>
                </nav>
            </header>
        </>
    )
}