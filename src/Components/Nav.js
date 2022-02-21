import React from 'react'
import Logo  from  '../Images/logo.svg'

function Nav() {
    return(
        <nav className='nav'>
        <div className='nav-title'>
            <img src={Logo} alt="logo-react" className='logo' />
            <p>ReactFacts</p>

        </div>
            <p>React Course - Project 1</p>
        </nav>
    )
}

export default Nav