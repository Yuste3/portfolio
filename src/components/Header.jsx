import React from 'react'


export default function Header() {
    return (
        <>
            <header className='flex justify-center py-5 w-full xl:w-[1120px] mx-auto'>
                <nav className='flex flex-row gap-x-10 opacity-80'>
                    <a href="#top">Inicio</a>
                    <a href="#experience">Experiencia</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#about">Sobre mí</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </header>
        </>
    )
}
