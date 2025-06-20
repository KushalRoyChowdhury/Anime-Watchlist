import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
    useEffect(() => {
        document.title = "AnimeList | Home";
    }, [])
    return (
        <>
            <Link className="nav-link fs-6 fw-semibold active" aria-current="page" to="#">Home</Link>
            <Link className="nav-link fs-6 fw-semibold" to="/about">About</Link>
        </>
    )
}
