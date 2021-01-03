import React from 'react'
import { Link } from 'react-router-dom'
import GurukulLogo from '../GurukulLogo.png'

const Home = () => {
    return (
        <main>
            <h1 className="school-name">Gurukul <img className="logo-cap" src={GurukulLogo} alt="logo" /> Academy</h1>
            <p className="quote">Preparing Students For Success In A Changing World</p>
            <div className="btn-div">
                <Link to="/gallery">
                    <button className="gallery-btn"><h2>Gallery</h2></button>
                </Link>
                <Link to="/news">
                    <button className="news-btn"><h2>News</h2></button>
                </Link>
            </div>
        </main>
    )
}

export default Home