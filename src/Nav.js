import React from 'react';
import Logo from './logo.svg';


function Nav(){
    return (
        <nav className='navBar'>
            <img src={Logo} alt="logo react" className='img-logo' />
            <ul className='nav-items'>
                <li>Precios</li>
                <li>Info</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}

export default Nav