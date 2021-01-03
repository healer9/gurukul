import React from 'react'
import { NavLink } from 'react-router-dom'
import SocialMedia from './SocialMedia'

const MinorLinks = (props) => {
    return (
        <div className="nav-container">
            <ul className={props.class}>
                <NavLink to="/alumni"><li>Alumni</li></NavLink>
                <NavLink to="/faculty"><li>Faculty</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
                <NavLink to="/tour"><li>Tour</li></NavLink>
                <NavLink to="/portal"><li>Portal</li></NavLink>
            </ul>|
            <SocialMedia />
        </div>
    )
}

export default MinorLinks