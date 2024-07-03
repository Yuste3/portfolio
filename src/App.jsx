import React from 'react'
import Header from './components/Header'
import Badge from './components/Badge'
import LinkedinPhoto from "C:\\Users\\yuste\\Downloads\\FotoLinkedin.jpg"
import LinkedIn from './icons/LinkedIn'
import Github from './icons/Github'
import Gmail from './icons/Gmail'
import Experience from './components/Experience'
import SectionContainer from './components/SectionContainer'
import Footer from './components/Footer'
import Code from './icons/Code';
import Projects from './components/Projects'

export default function App() {
    return (
        <>
            <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            {/* <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
            <Header />

            <div className='px-4'>
                <SectionContainer>
                    <img src={LinkedinPhoto} alt="Dani photo" className='rounded-full size-12 mb-4' />
                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10'>Hey, soy Dani 🌟
                        <a href="https://linkedin.com/in/danielyustealvarez" target='_blank' rel='noopener' className='flex justify-center items-center'>
                            <Badge avaliable="Disponible para trabajar" />
                        </a>
                    </h1>
                    <h2 className='text-xl lg:text-2xl text-wrap max-w-[700px]'>
                        <span className='text-yellow-200/90'>Programador Junior 💻</span>
                        <span> con +6 meses de experiencia y con una curiosidad insaciable por la tecnología y el desarrollo de software. </span>
                        <span className='text-red-200/90'>De Madrid, España 🇪🇸.  </span>
                        <span>Especializado en adaptación y aprendizaje rápido.</span>
                    </h2>

                    <nav className='flex flex-wrap gap-4 mt-8'>
                        <a href="https://linkedin.com/in/danielyustealvarez" target="_blank" className='bg-white/5 border border-white/10 rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10'><LinkedIn className="size-4 lg:size-6" />LinkedIn</a>
                        <a href="https://github.com/Yuste3" target='_blank' className='bg-white/5 border border-white/10 rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10'><Github className="size-4 lg:size-6" /> GitHub</a>
                        <a href="mailto:yustealvarez.daniel@gmail.com" target='_blank' className='bg-white/5 border border-white/10 rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10'><Gmail className="size-4 lg:size-6" />Contáctame</a>
                    </nav>
                </SectionContainer>

                <SectionContainer id="experience">
                    <h2 className='text-3xl font-semibold mb-6 flex gap-x-3 items-center'>💼 Experiencia laboral</h2>
                    <Experience />
                </SectionContainer>

                <SectionContainer id="projects">
                    <h2 className='text-3xl font-semibold mb-6 flex gap-x-3 items-center'>
                        <Code className="size-7" />
                        Proyectos
                    </h2>
                    <Projects />
                </SectionContainer>


            </div>
            <Footer />

        </>
    )
}
