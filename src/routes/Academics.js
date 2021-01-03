import React, { useState } from 'react'
import AcademicsInfo from '../Academics/AcademicsInfo'

const Academics = () => {
    const [index, setIndex] = useState(0)
    const { title, description } = AcademicsInfo[index]

    const handleClick = (index) => {
        setIndex(index)
    }

    return (
        <div className="about-container">
            <div className="about-links">
                <h2>Academics</h2>
                <ul className="about-list">
                    <li onClick={() => handleClick(0)}>Library</li>
                    <li onClick={() => handleClick(1)}>Computer Labs</li>
                    <li onClick={() => handleClick(2)}>Departments</li>
                </ul>
            </div>
            <div className="about-info">
                <h2>{title}</h2>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default Academics