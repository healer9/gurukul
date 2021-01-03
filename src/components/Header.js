import React from 'react'
import Logo from './Logo'
import Links from './Links'
import MinorLinks from './MinorLinks'

const Header = () => {
    return (
        <div className="header-container">
            <header>
                <Logo />
                <Links
                    key={"nav-links"}
                    class={"nav-links"}
                />
            </header>
            <MinorLinks
                key={"nav-links-minor"}
                class={"nav-links-minor"}
            />
        </div>
    )
}

export default Header