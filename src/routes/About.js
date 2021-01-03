import React, { useState } from 'react'
import AboutInfo from '../About/AboutInfo'

const About = () => {
    const [index, setIndex] = useState(0)
    const { title, description } = AboutInfo[index]

    const handleClick = (index) => {
        setIndex(index)
    }

    return (
        <div className="about-container">
            <div className="about-links">
                <h2>About</h2>
                <ul className="about-list">
                    <li onClick={() => handleClick(0)}>School</li>
                    <li onClick={() => handleClick(1)}>Principal Desk</li>
                    <li onClick={() => handleClick(2)}>Students</li>
                </ul>
            </div>
            <div className="about-info">
                <h2>{title}</h2>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default About