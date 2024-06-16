import React from 'react'

export default function Projects() {

    const PROJECTS = [
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
            image: "http://placehold.it/300x200",
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 2,
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
            image: "http://placehold.it/300x200",
            tags: ["HTML", "CSS", "JavaScript"]
        }
    ]

    return (
        PROJECTS.map(({ id, title, description, link }) => (
            <article key={id}>
                {/* TODO */}
            </article>
        ))
    )
}
