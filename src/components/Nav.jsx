import React from 'react';
import contact from '../assets/contact.png';
import logo from '../assets/logo.png';
import close from '../assets/close.png';
import add from '../assets/add.png';

function Nav({ onAdd, onClose, isHabitOpen, onSignout }) {
    return (
        <div className='nav-container'>
            <button><img className='nav-icon' src={contact} alt='contact us icon' /></button>
            <img className='logo' src={logo} alt='bad habit breaker logo' />
            <button onClick={onSignout}>Sign out</button>
            <button onClick={isHabitOpen ? onClose : onAdd}>
                {isHabitOpen ?
                    <img className='nav-icon' src={close} alt='close icon' />
                    :
                    <img className='nav-icon' src={add} alt='add icon' />
                }
            </button>
        </div>
    );
}

export default Nav;