import React from 'react'

export default function Footer() {
    return (
        <footer className="rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-evenly lg:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center text-pretty text-center mt-5">© 2024 Página hecha con 💙. Casi todos los derechos reservados.</span>
                <ul className="flex flex-wrap items-center mt-5 text-sm font-medium text-gray-500 dark:text-gray-400 justify-center">
                    <li>
                        <a href="mailto:yustealvarez.daniel@gmail.com" target='_blank' className="hover:underline me-4 md:me-6">Sobre mí</a>
                    </li>
                    <li>
                        <a href="mailto:yustealvarez.daniel@gmail.com" target='_blank' className="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
