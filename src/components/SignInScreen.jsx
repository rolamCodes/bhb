import React from 'react';
import logo from '../assets/logo.png';

function SignInScreen({ onSignIn }) {
    return (
        <div className='sign-in-screen'>
            <img className='logo' src={logo} alt='Bad Habit Breaker' />
            <div className='center-text'>
                <h1>Bad Habit Breaker</h1>
                <p>This app helps you break bad habits by keeping you accountable.</p>
            </div>
            <button
                onClick={onSignIn}
                className='button button-small'
            >
                Sign in with Google
            </button>
        </div>
    );
}

export default SignInScreen;