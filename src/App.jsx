import React from 'react'
import Header from './components/Header'
import Badge from './components/Badge'
import LinkedinPhoto from "C:\\Users\\yuste\\Downloads\\FotoLinkedin.jpg"
import LinkedIn from './icons/LinkedIn'
import Github from './icons/Github'
import Gmail from './icons/Gmail'
import Experience from './components/Experience'

export default function App() {
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <Header />
            <section className='w-full mx-auto lg:w-[740px] pb-24 pt-44'>
                <img src={LinkedinPhoto} alt="Dani photo" className='rounded-full size-12 mb-4' />
                <h1 className='text-white text-5xl font-bold flex flex-row gap-x-4 pb-10'>Hey, soy Daniel Yuste
                    <a href="https://linkedin.com/in/danielyustealvarez" target='_blank' rel='noopener' className='flex justify-center items-center'>
                        <Badge avaliable="Disponible para trabajar" />
                    </a>
                </h1>
                <h2 className='text-xl text-wrap'>
                    <span className='text-yellow-200/90'>Programador Junior 💻</span>
                    <span> con +6 meses de experiencia y con una curiosidad insaciable por la tecnología y el desarrollo de software. </span>
                    <span className='text-red-200/90'>De Madrid, España 🇪🇸.  </span>
                    <span>Especializado en adaptación y aprendizaje rápido.</span>
                </h2>

                <nav className='flex gap-x-4 mt-8'>
                    <a href="https://linkedin.com/in/danielyustealvarez" className='rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition'><LinkedIn className="size-6" />LinkedIn</a>
                    <a href="https://github.com/Yuste3" className='rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition'><Github className="size-6" /> GitHub</a>
                    <a href="" className='rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition'><Gmail className="size-6" />Gmail</a>
                </nav>
            </section>


            <section className='w-full mx-auto lg:w-[740px] py-44'>
                {/* TODO */}
                <h2 className=''>Experiencia laboral 💼 </h2>
                <Experience />
            </section>

        </>
    )
}
