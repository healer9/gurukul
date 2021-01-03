import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = (props) => {
    return (
        <nav>
            <ul className={props.class}>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/admission"><li>Admission</li></NavLink>
                <NavLink to="/academics"><li>Academics</li></NavLink>
            </ul>
        </nav>
    )
}

export default Links