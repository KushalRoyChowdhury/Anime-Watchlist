import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function About() {
    useEffect(() => {
        document.title = "AnimeList | About";
    }, [])

    return (
        <>
            <Link className="nav-link fs-6 fw-semibold" aria-current="page" to="/">Home</Link>
            <Link className="nav-link fs-6 fw-semibold active" to="#">About</Link>
        </>
    )
}
