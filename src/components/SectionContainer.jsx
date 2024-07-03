import React from 'react'

export default function SectionContainer(props) {
    return (
        <section id={props.id} className='w-full mx-auto md:w-[740px] pb-22 pt-40'>
            {props.children}
        </section>
    )
}
