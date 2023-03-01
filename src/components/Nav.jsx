import React from 'react';
import signout from '../assets/signout.png';
import logo from '../assets/logo.png';
import close from '../assets/close.png';
import add from '../assets/add.png';

function Nav({ onGetInput, onClose, isHabitOpen, onSignout }) {
    return (
        <div className='nav-container'>
            <button onClick={onSignout}><img className='nav-icon' src={signout} alt='sign out icon' /></button>
            <img className='logo' src={logo} alt='bad habit breaker logo' />
            <button onClick={isHabitOpen ? onClose : onGetInput}>
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