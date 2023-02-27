import React from 'react';
import contact from '../assets/contact.png';
import menu from '../assets/menu.png';
import logo from '../assets/logo.png';

function Nav() {
    return (
        <div className='nav-container'>
            <button><img className='nav-icon' src={contact} width={25} alt='' /></button>
            <img className='nav-icon' src={logo} width={32} alt='' />
            <button><img className='nav-icon' src={menu} width={25} alt='' /></button>
        </div>
    );
}

export default Nav;