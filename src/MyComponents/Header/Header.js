import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import About from './About'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary lh-lg">
            <div className="container-fluid">
                <a className="navbar-brand fs-4 fw-bold" href="/">AnimeList</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Routes>
                            <Route path="/" element={<Home />} />

                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </nav>
    )
}
