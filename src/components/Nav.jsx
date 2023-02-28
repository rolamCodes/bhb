import React from 'react';
import contact from '../assets/contact.png';
import menu from '../assets/menu.png';
import logo from '../assets/logo.png';
import close from '../assets/close.png';

function Nav({ onMenuButtonClick, isMenuOpen }) {
    return (
        <div className='nav-container'>
            <button><img className='nav-icon' src={contact} alt='contact us icon' /></button>
            <img className='logo' src={logo} alt='bad habit breaker logo' />
            <button onClick={onMenuButtonClick}>
                {isMenuOpen ?
                    <img className='nav-icon' src={close} alt='close icon' />
                    :
                    <img className='nav-icon' src={menu} alt='menu icon' />
                }
            </button>
        </div>
    );
}

export default Nav;