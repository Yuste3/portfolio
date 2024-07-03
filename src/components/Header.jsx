import React from 'react'
import { useState, useEffect } from 'react'
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'


export default function Header() {


    const [selectedTheme, setSelectedTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    if (selectedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add("light");
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add("dark");
    }

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
            setSelectedTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        });
        // localStorage.getItem("theme") && setSelectedTheme(localStorage.getItem("theme"));
    })

    const handleThemeChange = () => {
        document.documentElement.classList.remove('light', 'dark');
        if (selectedTheme === 'dark') {
            document.documentElement.classList.add("light");
            setSelectedTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            setSelectedTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <>
            <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2'>
                <nav className='flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center ring-1 shadow-lg backdrop-blur dark:bg-gray-800/90 bg-white/50 ring-white/10'>
                    <a href="#experience" className='relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400'>Experiencia</a>
                    <a href="#projects" className='relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400'>Proyectos</a>
                    <a href="#about" className='relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400'>Sobre mí</a>
                    <a href="#contact" className='relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400'>Contacto</a>
                    <div className="relative ml-1 mr-1">
                        <button id="theme-toggle-btn" className="appearance-none border-none flex hover:scale-125 transition" onClick={() => handleThemeChange()}>
                            <span className="sr-only">Elige el tema</span>
                            {selectedTheme === "light"
                                ?
                                <SunIcon id="light" className="theme-toggle-icon size-5 transition-all" />
                                :
                                <MoonIcon id="dark" className="theme-toggle-icon size-5 transition-all" />
                            }
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}